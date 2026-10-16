import json, os, re, sys, urllib.request, urllib.parse, html
out = sys.argv[1]
img_dir = os.path.join(out, "images"); os.makedirs(img_dir, exist_ok=True)
API = "https://braveandbold.fandom.com/api.php"
params = {"action":"query","generator":"categorymembers","gcmtitle":"Category:Characters","gcmlimit":"500","gcmnamespace":"0","prop":"pageimages","piprop":"thumbnail","pithumbsize":"400","pilimit":"500","format":"json"}
pages = {}
cont = {}
while True:
    q = dict(params, **cont)
    data = json.load(urllib.request.urlopen(urllib.request.Request(API + "?" + urllib.parse.urlencode(q), headers={"User-Agent":"Mozilla/5.0"})))
    for pid, p in data.get("query", {}).get("pages", {}).items():
        cur = pages.setdefault(pid, {"title": p["title"]})
        if "thumbnail" in p: cur["thumb"] = p["thumbnail"]["source"]
    if "continue" not in data: break
    cont = data["continue"]
chars = sorted(pages.values(), key=lambda c: c["title"].lower())
print("characters:", len(chars), "with image:", sum("thumb" in c for c in chars))
for c in chars:
    if "thumb" not in c: continue
    path = urllib.parse.urlparse(c["thumb"]).path
    m = re.search(r"/images/./../([^/]+)", path)
    ext = os.path.splitext(urllib.parse.unquote(m.group(1)))[1].lower() if m else ".png"
    if ext not in (".png",".jpg",".jpeg",".gif",".webp"): ext = ".png"
    fn = re.sub(r"[^A-Za-z0-9._-]+", "_", c["title"]).strip("_") + ext
    dest = os.path.join(img_dir, fn)
    if not os.path.exists(dest):
        try:
            req = urllib.request.Request(c["thumb"], headers={"User-Agent":"Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=30) as r, open(dest, "wb") as f: f.write(r.read())
        except Exception as e:
            print("fail", c["title"], e); continue
    c["file"] = "images/" + fn
json.dump(chars, open(os.path.join(out, "characters.json"), "w"), indent=1)
cards = []
for c in chars:
    url = "https://braveandbold.fandom.com/wiki/" + urllib.parse.quote(c["title"].replace(" ", "_"))
    t = html.escape(c["title"])
    img = f'<img loading="lazy" src="{c["file"]}" alt="{t}">' if "file" in c else '<div class="noimg">no image</div>'
    cards.append(f'<a class="card" href="{url}" target="_blank" data-name="{t.lower()}">{img}<span>{t}</span></a>')
page = f'''<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Brave and the Bold Characters</title><style>
body{{font-family:system-ui,sans-serif;background:#111;color:#eee;margin:0;padding:16px}}
h1{{margin:0 0 8px}} input{{width:100%;max-width:400px;padding:8px;font-size:16px;margin-bottom:16px;box-sizing:border-box}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}}
.card{{background:#222;border-radius:8px;overflow:hidden;color:#eee;text-decoration:none;display:flex;flex-direction:column}}
.card img,.noimg{{width:100%;aspect-ratio:1;object-fit:cover;background:#333}}
.noimg{{display:flex;align-items:center;justify-content:center;color:#777;font-size:13px}}
.card span{{padding:6px 8px;font-size:14px}}
</style></head><body><h1>Batman: The Brave and the Bold — Characters ({len(chars)})</h1>
<input id="q" placeholder="Search by name..." oninput="for(const c of document.querySelectorAll('.card'))c.style.display=c.dataset.name.includes(this.value.toLowerCase())?'':'none'">
<div class="grid">
{chr(10).join(cards)}
</div></body></html>'''
open(os.path.join(out, "index.html"), "w").write(page)
