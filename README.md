# basic for business

Bilingual (Hebrew / English) B2B site for **basic** organic cotton bedding gift boxes, aimed at HR and employee-experience teams in Israel.

Static site, no build step: open `index.html` or deploy the folder to any static host (Netlify, Vercel, GitHub Pages, Wix embed, etc.).

- `index.html` holds the page and all Hebrew copy (default, RTL).
- `assets/script.js` holds the English copy (`EN` object), the language toggle (`?lang=en` also works) and the quote form.
- `assets/styles.css` holds all styles.

## Before going live

- **Contact details:** replace `business@basic-studio.com` (in `index.html` and `QUOTE_EMAIL` in `script.js`) and the WhatsApp number `972500000000`.
- **Quote form:** currently opens a pre-filled email. Connect it to a form service or CRM (e.g. Formspree, HubSpot, Wix Forms) to capture leads directly.
- **Photos:** `assets/photos/` holds images cropped from screenshots of basic-studio.com. They work, but the pillow and cloud-blanket product cards use small (188px) thumbnails. Swap in the original high-resolution files when available (same file names).
- **Colours:** the 8 swatches were sampled from the retail site's colour dots. Only White and Smoky Pink have confirmed names; check the others (Cream, Light grey, Grey-green, Charcoal, Mustard, Plum).
- **Business terms:** minimum order (10 / 20), delivery times (5–10 business days), 30-day exchange and next-day quote are suggested defaults. Adjust them to match your actual operations.
