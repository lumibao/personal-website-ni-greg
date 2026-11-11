# Personal Website ni Greg

Personal website na ginawa base sa diagram: Home, About Me, My Interests, My Gallery, My Thoughts, at Contact — may shared navigation menu.

## Paano buksan
- I-double click ang `index.html` — bubukas sa browser.
- O i-run ang local server: `python3 -m http.server 8000` tapos buksan ang `http://localhost:8000`

## Files
- `index.html` — lahat ng content (sections 01–06)
- `style.css` — design (cream paper, black headers, mustard yellow — gaya ng diagram)
- `script.js` — mobile menu, gallery filter, read more, contact form

## Paano palitan ang pictures (PLACEHOLDER lang muna)
Hanapin sa `index.html` ang salitang **PLACEHOLDER** o **PALITAN**. Halimbawa:

```html
<!-- ngayon -->
<div class="placeholder ph-profile">... PROFILE PICTURE ...</div>

<!-- palitan ng ganito -->
<img src="profile.jpg" alt="Greg" style="width:100%;border-radius:10px">
```

Ilagay ang picture files sa tabi ng `index.html`, tapos baguhin ang `src` sa filename mo.

## Paano baguhin ang text
- Biography: hanapin ang `Short biography` sa `index.html`
- Quick facts: hanapin ang `Quick facts`
- Interests: hanapin ang `My Interests` (Music / Art / Games / Style)
- Gallery captions: hanapin ang `caption mo dito`
- Thoughts posts: hanapin ang `Why I made this website`
- Social links: hanapin ang `Facebook` sa Contact section

## Notes
- Ang contact form ay front-end demo lang (walang backend) — nagpapakita lang ng message pag na-submit.
- Walang external images — lahat placeholder para ikaw na maglagay ng totoong pictures.
