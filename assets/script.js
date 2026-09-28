// Bilingual content: Hebrew lives in index.html (default, RTL); English is defined here.
// Hebrew strings are captured from the page on load so both languages can be toggled.
const EN = {
  "nav.why": "Why sleep",
  "nav.packages": "Gift boxes",
  "nav.collection": "Products",
  "nav.how": "How it works",
  "nav.faq": "FAQ",
  "nav.cta": "Get a quote",

  "hero.eyebrow": "basic for business · employee gifts",
  "hero.title": "Great work starts<br>with a good night.",
  "hero.lead": "Organic cotton bedding gift boxes for your team: a gift people use every night, and one that reminds them every morning that their workplace cares.",
  "hero.cta1": "See the gift boxes",
  "hero.cta2": "Request a quote",
  "hero.f1": "100% combed organic cotton",
  "hero.f2": "Your logo & a personal card",
  "hero.f3": "Delivered to the office or to each home",
  "hero.tag": "Sleep well,<br>and thank you.",

  "why.eyebrow": "Why sleep",
  "why.title": "Real wellbeing doesn't clock out at five.",
  "why.lead": "We invest in the right chair, the right screen and a good lunch. But a third of life is spent in bed, and that's where tomorrow morning is decided.",
  "why.c1t": "They come back rested",
  "why.c1p": "Good sleep directly shapes focus, mood, creativity and decision-making. People who sleep well simply work better, and enjoy it more.",
  "why.c2t": "A gift that gets used",
  "why.c2p": "Not another water bottle or notebook left in a drawer. Quality bedding is used every night for years, a quiet reminder of who gave it.",
  "why.c3t": "It says something about your culture",
  "why.c3p": "A gift that says \"your rest matters to us\" builds belonging and loyalty, and shows that employee wellbeing is a value, not just a budget line.",

  "band.quote": "“It's easy to talk about wellbeing. The most direct way to act on it is to help people sleep well.”",

  "pk.eyebrow": "Gift boxes",
  "pk.title": "Three ways to say thank you.",
  "pk.lead": "Every box comes gift-wrapped with a personal card from your company. Choose sizes and colours for each employee, or let everyone pick their own.",
  "pk1.label": "The basic box",
  "pk1.name": "Good Night",
  "pk1.desc": "Our classic basic box: an organic cotton duvet cover with a matching pillowcase. A small, thoughtful treat.",
  "pk1.i1": "Duvet cover (single or double)",
  "pk1.i2": "Pillowcase",
  "pk1.i3": "Gift box + personal card",
  "pk1.for": "Great for: birthdays, onboarding, project wins",
  "pk2.badge": "Most popular",
  "pk2.label": "The full set",
  "pk2.name": "Deep Sleep",
  "pk2.desc": "A complete organic cotton bedding set: everything needed to make the bed the best place in the house.",
  "pk2.i1": "Duvet cover",
  "pk2.i2": "Fitted sheet",
  "pk2.i3": "2 pillowcases",
  "pk2.i4": "Gift box + personal card",
  "pk2.for": "Great for: holiday gifts, year-end, company events",
  "pk3.label": "Premium",
  "pk3.name": "Full Rest",
  "pk3.desc": "The full bedding set together with the basic cloud blanket: soft, airy and right for every season.",
  "pk3.i1": "Full bedding set",
  "pk3.i2": "Cloud blanket",
  "pk3.i3": "A colour choice for each employee",
  "pk3.i4": "Gift box + personal card",
  "pk3.for": "Great for: leadership, work anniversaries, special recognition",
  "custom.title": "Need something different?",
  "custom.text": "We'll build a custom box around your budget, quantity, colours or branding. Volume pricing from 20 gifts.",
  "custom.cta": "Plan a custom box",

  "col.eyebrow": "The collection",
  "col.title": "Simple. Clean. Made to last.",
  "col.lead": "Basic bedding in 100% combed and brushed organic cotton, in quiet colours that suit any bedroom. No prints, no trends, just excellent fabric that gets softer with every wash.",
  "col.p1t": "Sheets",
  "col.p1p": "The basic fitted sheet, made for 200 cm long mattresses up to 30 cm deep.",
  "col.p2t": "Duvet covers",
  "col.p2p": "Single, double and king duvet covers: clean, smooth and in calm tones.",
  "col.p3t": "Pillowcases",
  "col.p3p": "Matching pillowcases for every set, with an exceptionally fine finish.",
  "col.p4t": "Cloud blankets",
  "col.p4p": "An organic cotton shell with an airy fill that feels like a cloud. Single and double (200/220), for every season.",
  "col.colors": "Colours:",
  "col.c1": "White",
  "col.c2": "Cream",
  "col.c3": "Light grey",
  "col.c4": "Grey-green",
  "col.c5": "Charcoal",
  "col.c6": "Mustard",
  "col.c7": "Smoky pink",
  "col.c8": "Plum",

  "img.hero": "A bed made with white basic organic cotton bedding by a sunlit window",
  "img.pk1": "Single basic set: duvet cover and pillowcase, seen from above",
  "img.pk2": "Double basic set: duvet cover and two pillowcases, seen from above",
  "img.pk3": "A woman hugging a white basic cloud blanket",
  "img.p1": "Close-up of soft, crinkled organic cotton",
  "img.p2": "White duvet cover and pillowcases on a made bed",
  "img.p3": "Two white pillows",
  "img.p4": "A woman carrying a cloud blanket",

  "org.eyebrow": "Why organic cotton",
  "org.title": "Good for the body, for sleep, and for the planet.",
  "org.t1": "Breathable",
  "org.p1": "Natural fibres that regulate heat and moisture, so hot nights are less sweaty.",
  "org.t2": "Gentle on skin",
  "org.p2": "Grown without synthetic pesticides and processed without harsh chemicals.",
  "org.t3": "Lasts for years",
  "org.p3": "Combed long fibres that get softer over time instead of wearing out.",
  "org.t4": "A responsible choice",
  "org.p4": "Less water, healthier soil: a gift that fits your company's ESG goals.",

  "how.eyebrow": "How it works",
  "how.title": "You choose. We take care of the rest.",
  "how.s1t": "Pick a box",
  "how.s1p": "Leave your details and get a quote within one business day, with a physical sample if you'd like one.",
  "how.s2t": "Make it yours",
  "how.s2p": "Your logo on the box, your message on the card, sizes and colours chosen centrally or through a form for each employee.",
  "how.s3t": "We pack",
  "how.s3p": "Every box is hand-packed and checked before it leaves. We keep you updated along the way.",
  "how.s4t": "It arrives",
  "how.s4p": "Delivered in bulk to the office, or directly to each employee's home, anywhere in Israel.",

  "occ.eyebrow": "All year round",
  "occ.title": "Every moment is a chance to show you care.",
  "occ.1": "Rosh Hashanah",
  "occ.2": "Passover",
  "occ.3": "Onboarding new hires",
  "occ.4": "New baby",
  "occ.5": "Moving home",
  "occ.6": "Work anniversaries",
  "occ.7": "End of a project or quarter",
  "occ.8": "Back from reserve duty",
  "occ.9": "Retirement",

  "faq.eyebrow": "FAQ",
  "faq.title": "What people ask us.",
  "faq.q1": "What's the minimum order?",
  "faq.a1": "Ready-made boxes can be ordered from 10 units. Custom boxes and volume pricing start at 20 units.",
  "faq.q2": "How do we choose sizes for each employee?",
  "faq.a2": "Choose one size for everyone, send us a list, or we'll send each employee a personal link to pick their own size and colour, so you don't have to manage it.",
  "faq.q3": "How long does delivery take?",
  "faq.a3": "In-stock boxes ship within 5–10 business days. Before holidays we recommend ordering at least 3–4 weeks ahead.",
  "faq.q4": "Can you add our logo?",
  "faq.a4": "Yes. Your logo goes on the gift box and the card. The products themselves stay clean, so employees are happy to use them at home.",
  "faq.q5": "What if a size doesn't fit?",
  "faq.a5": "Each employee can exchange size or colour within 30 days, directly with us.",
  "faq.q6": "Do you issue a tax invoice to the company?",
  "faq.a6": "Of course. We work with companies through formal quotes, purchase orders and tax invoices.",

  "q.eyebrow": "Let's talk",
  "q.title": "Give your team a good night.",
  "q.lead": "Tell us a little about your company and the occasion, and we'll get back to you with a quote and ideas within one business day.",
  "q.whatsapp": "WhatsApp for business",
  "q.shop": "Visit our retail shop →",
  "q.name": "Full name",
  "q.company": "Company",
  "q.email": "Email",
  "q.phone": "Phone",
  "q.qty": "Number of gifts",
  "q.pkg": "Gift box",
  "q.o1": "Good Night",
  "q.o2": "Deep Sleep",
  "q.o3": "Full Rest",
  "q.o4": "Custom",
  "q.o5": "Not sure yet",
  "q.date": "Preferred delivery date",
  "q.msg": "Anything else we should know?",
  "q.submit": "Request a quote",

  "f.tag": "Organic cotton bedding. Gifts for people who deserve to rest."
};

const META = {
  he: { title: document.title, sent: "תודה! פתחנו עבורכם הודעת מייל מוכנה – נחזור אליכם תוך יום עסקים.", invalid: "נא למלא שם, חברה ואימייל תקין." },
  en: { title: "basic · Sleep gifts for your team", sent: "Thank you! We've opened a ready-to-send email. We'll reply within one business day.", invalid: "Please fill in your name, company and a valid email." }
};

const QUOTE_EMAIL = "business@basic-studio.com";

const HE_ALT = {
  "img.hero": "מיטה מוצעת במצעי basic לבנים מכותנה אורגנית ליד חלון מואר",
  "img.pk1": "סט basic יחיד: ציפה לשמיכה וציפית, מבט מלמעלה",
  "img.pk2": "סט basic זוגי: ציפה לשמיכה ושתי ציפיות, מבט מלמעלה",
  "img.pk3": "אישה מחבקת שמיכת ענן לבנה של basic",
  "img.p1": "תקריב של כותנה אורגנית רכה",
  "img.p2": "ציפה וציפיות לבנות על מיטה מוצעת",
  "img.p3": "שתי כריות לבנות",
  "img.p4": "אישה נושאת שמיכת ענן"
};

const nodes = document.querySelectorAll("[data-i18n]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const HE = {};
nodes.forEach(el => { HE[el.dataset.i18n] = el.innerHTML; });

let lang = "he";

function setLang(next) {
  lang = next;
  const dict = next === "en" ? EN : HE;
  nodes.forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });
  altNodes.forEach(el => {
    el.alt = (next === "en" ? EN : HE_ALT)[el.dataset.i18nAlt] || "";
  });
  document.documentElement.lang = next;
  document.documentElement.dir = next === "en" ? "ltr" : "rtl";
  document.title = META[next].title;
  document.getElementById("langToggle").textContent = next === "en" ? "עב" : "EN";
  document.getElementById("formNote").textContent = "";
  try { localStorage.setItem("lang", next); } catch (e) {}
  const url = new URL(location.href);
  url.searchParams.set("lang", next);
  history.replaceState(null, "", url);
}

document.getElementById("langToggle").addEventListener("click", () => {
  setLang(lang === "he" ? "en" : "he");
});

let initial = new URLSearchParams(location.search).get("lang");
if (!initial) { try { initial = localStorage.getItem("lang"); } catch (e) {} }
setLang(initial === "en" ? "en" : "he");

// Quote form: no backend yet, so it composes an email to the business inbox.
document.getElementById("quoteForm").addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  const note = document.getElementById("formNote");
  const required = ["name", "company", "email"].map(n => form.elements[n]);
  let ok = true;
  required.forEach(input => {
    const valid = input.value.trim() && input.checkValidity();
    input.classList.toggle("is-invalid", !valid);
    if (!valid) ok = false;
  });
  if (!ok) { note.textContent = META[lang].invalid; return; }

  const f = form.elements;
  const pkg = f.package.options[f.package.selectedIndex].text;
  const lines = [
    `Name: ${f.name.value}`,
    `Company: ${f.company.value}`,
    `Email: ${f.email.value}`,
    `Phone: ${f.phone.value}`,
    `Quantity: ${f.quantity.value}`,
    `Package: ${pkg}`,
    `Delivery date: ${f.date.value}`,
    "",
    f.message.value
  ];
  const subject = `Corporate gift quote – ${f.company.value}`;
  location.href = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  note.textContent = META[lang].sent;
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
