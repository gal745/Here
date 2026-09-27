# basic for business

Bilingual (Hebrew / English) B2B site for **basic** organic cotton bedding gift boxes, aimed at HR and employee-experience teams in Israel.

Static site, no build step: open `index.html` or deploy the folder to any static host (Netlify, Vercel, GitHub Pages, Wix embed, etc.).

- `index.html` holds the page and all Hebrew copy (default, RTL).
- `assets/script.js` holds the English copy (`EN` object), the language toggle (`?lang=en` also works) and the quote form.
- `assets/styles.css` holds all styles.

## Before going live

- **Contact details:** replace `business@basic-studio.com` (in `index.html` and `QUOTE_EMAIL` in `script.js`) and the WhatsApp number `972500000000`.
- **Quote form:** currently opens a pre-filled email. Connect it to a form service or CRM (e.g. Formspree, HubSpot, Wix Forms) to capture leads directly.
- **Photos:** product and hero visuals are CSS placeholders. Swap in real product photography.
- **Colours:** only White and Smoky Pink are confirmed from the retail site; check the other three brand colour names and hex values.
- **Business terms:** minimum order (10 / 20), delivery times (5–10 business days), 30-day exchange and next-day quote are suggested defaults. Adjust them to match your actual operations.

---

# Human in the Loop (course)

`course/index.html` is a self-contained, self-paced online course on using AI and screens in healthy ways. It is a single static file with no build step and no dependencies other than Google Fonts.

Modules: why it matters (with a self-check), eyes and light (blue light, 20-20-20, green/far focus), body and micro-movement, mental fatigue and breaks, AI as employee not manager (with a delegation exercise), staying sharp by having AI quiz you (copyable prompts), spirit and presence, and a personal plan builder.

The top bar holds a break coach that reminds you to take eye and movement breaks while the page is open. Progress, answers and the plan are saved in the visitor's browser (`localStorage`).
