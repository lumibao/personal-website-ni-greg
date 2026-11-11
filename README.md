# Personal Website ni Greg

Simple Valorant-style personal website. Birthday: **November 25, 2007**.

## Paano buksan
- I-double click ang `index.html`, o
- `python3 -m http.server 8000` tapos buksan ang `http://localhost:8000`

## Nav Menu
Home · About · Interests · Gallery · Thoughts · Contact · **Activity ▾**

### Activity (lahat ng school requirements)
- **Resume** — `#resume` (palitan ang school at contact details)
- **Calendar** — `#calendar` (November 2026, naka-highlight ang Nov 25 birthday mo; may prev/next month)
- **Banner** — `#banner` (yung banner sa taas ng Home)
- **Background** — `#background` (dark #0F1923 + color swatches)
- **Logo** — `#logo` (favicon.svg, makikita rin sa browser tab)
- **Template** — `#template` (layout diagram ng site)

## Files
- `index.html` — content + lahat ng sections
- `style.css` — Valorant-style design (dark #0F1923, red #FF4655, angular cuts)
- `script.js` — age calculator (from Nov 25, 2007), calendar, gallery, read more, form
- `favicon.svg` — logo + favicon (red V)

## Paano palitan ang pictures
Hanapin ang **PLACEHOLDER** / **PALITAN** sa `index.html`, tapos palitan ng:
```html
<img src="picture-mo.jpg" alt="Greg" style="width:100%">
```

## Paano palitan ang logo/favicon
Palitan ang laman ng `favicon.svg` — automatic na mag-a-update sa nav, resume, at browser tab.
