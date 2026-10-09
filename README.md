# ChromInk Studio website

A responsive static website for a tattoo studio, with a 20% promotion banner, $150 USD initial deposit notice, style gallery, booking form, and WhatsApp message builder.

## Files
- `index.html` — page content
- `styles.css` — layout and visual design
- `script.js` — mobile menu and WhatsApp booking behavior

## Configure WhatsApp
1. Open `script.js`.
2. Find `const WHATSAPP_NUMBER = "2547XXXXXXXX";`.
3. Replace the placeholder with the studio's real number in international format, digits only.
   - Kenya example format: `254712345678`
   - Do not include `+`, spaces, or the leading `0`.
4. Save and test the floating WhatsApp button and booking form.

## Promotion end date
In `script.js`, edit `PROMOTION_END_DATE`. Use `YYYY-MM-DD` only if the studio has confirmed an actual end date. Leave it blank otherwise.

## Edit content
- Business text, services, FAQ, and deposit terms are in `index.html`.
- Design and colors are in `styles.css` under `:root`.
- Replace sample gallery image URLs in `index.html` with images you own or have permission to use.
- Update social links and real contact/location information before launch. None are invented in this demo.
- Service prices are intentionally shown as consultation quotes rather than invented rates.

## Test on Android
1. Save all three files in the same folder.
2. Open `index.html` with a browser or use Acode's preview.
3. Test the mobile menu, style buttons, form validation, and WhatsApp checkout.
4. WhatsApp actions will display a setup message until you configure the number.

## Publish free with GitHub Pages
1. Sign in at https://github.com and create a new public repository, e.g. `chromink-studio`.
2. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
3. Open **Settings → Pages**.
4. Under build and deployment, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for deployment. GitHub will show your site address in the Pages section.

This is a static demo. It does not collect payments, confirm appointments, store customer submissions on a server, or automatically send WhatsApp messages. Customers must press Send in WhatsApp. Confirm deposit, cancellation, and discount terms directly with the studio before accepting payment.
