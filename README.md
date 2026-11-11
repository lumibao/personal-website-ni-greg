# greg — personal website

A small one-page site I built for our ICT subject and kept working on because I liked it.

Birthday: **November 25, 2007**

## How to open
Double-click `index.html`. That's it. No build step, no install.

## Sections
- **home** — quick intro and a photo placeholder
- **about** — basics table, values, things I like
- **photos** — six placeholders
- **thoughts** — dated notes
- **contact** — links plus a form that doesn't send anything yet
- **school stuff** — the six required parts: resume, calendar, banner, background, logo, template

## Files
- `index.html` — everything is in here
- `style.css` — the design (off-white page, serif type, one thin accent color)
- `script.js` — computes my age from Nov 25, 2007 and checks the contact form
- `favicon.svg` — the G logo on the browser tab

## Replacing the photos
Look for `photo-box` in `index.html` and swap the div for an image:

```html
<img src="my-photo.jpg" alt="me" width="300">
```

## Still to do
- real photos
- my school name and grade in the resume
- an actual email address in the contact list
