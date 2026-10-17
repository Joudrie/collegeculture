#!/usr/bin/env python3
"""Pulls each school's numbers from the federal College Scorecard into data/scorecard.json.
Download "Most-Recent-Cohorts-Institution" from https://collegescorecard.ed.gov/data/, unzip it, then:
    python3 tools/update-scorecard.py path/to/Most-Recent-Cohorts-Institution.csv
School ids map to Scorecard UNITIDs in data/scorecard-ids.json. Run tools/build-quiz-data.js after."""
import csv, json, os, sys
from datetime import date

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
ids = json.load(open(os.path.join(root, 'data', 'scorecard-ids.json')))
want = {v: k for k, v in ids.items()}

def num(x):
    try:
        return round(float(x))
    except (TypeError, ValueError):
        return None

def rate(x):
    try:
        return round(float(x), 3)
    except (TypeError, ValueError):
        return None

csv.field_size_limit(10 ** 9)
out = {}
with open(sys.argv[1], encoding='utf-8-sig') as f:
    for r in csv.DictReader(f):
        if r['UNITID'] not in want:
            continue
        pub = r['CONTROL'] == '1'
        p = 'PUB' if pub else 'PRIV'
        out[want[r['UNITID']]] = {
            'unitid': r['UNITID'],
            'public': pub,
            'lat': rate(r['LATITUDE']),
            'lon': rate(r['LONGITUDE']),
            'undergrad': num(r['UGDS']),
            'admitRate': rate(r['ADM_RATE']),
            'sticker': num(r['COSTT4_A']),
            'tuitionIn': num(r['TUITIONFEE_IN']),
            'tuitionOut': num(r['TUITIONFEE_OUT']),
            'net': num(r['NPT4_' + p]),
            'netLow': num(r['NPT41_' + p]),
            'netMid': num(r['NPT43_' + p]),
            'netHigh': num(r['NPT45_' + p]),
            'pell': rate(r['PCTPELL']),
            'firstGen': rate(r['PAR_ED_PCT_1STGEN']),
            'loan': rate(r['PCTFLOAN']),
            'retention': rate(r['RET_FT4']) if rate(r['RET_FT4']) is not None else rate(r['RET_FTL4']),
            'gradRate': rate(r['C150_4']) if rate(r['C150_4']) is not None else rate(r['C150_L4']),
            'earnings': num(r['MD_EARN_WNE_P10']),
        }

missing = sorted(set(ids) - set(out))
data = {'source': 'U.S. Department of Education College Scorecard', 'pulled': date.today().isoformat(),
        'schools': dict(sorted(out.items()))}
json.dump(data, open(os.path.join(root, 'data', 'scorecard.json'), 'w'), indent=1)
print(len(out), 'schools written' + ('; missing: ' + ', '.join(missing) if missing else ''))
