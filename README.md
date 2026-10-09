# CHROMINK STUDIO Tattoo Website

Responsive static website built with HTML5, CSS3 and vanilla JavaScript. No backend, paid API, or build step required.

## Files
- `index.html` — page sections and portfolio image URLs
- `style.css` — styling and mobile-responsive layout
- `script.js` — service prices, discount calculations, promotion settings, WhatsApp links, and booking form

## WhatsApp number
The number provided (`0752712890`) is configured as a Kenyan international number, `254752712890`. WhatsApp links use country code + number, digits only (no `+`, spaces, or leading local zero). If needed, change `WHATSAPP_NUMBER` near the top of `script.js`.

## Edit prices
Edit the `SERVICES` array in `script.js`. `price` is the original price in USD. The site automatically calculates the discounted price using `DISCOUNT_PERCENT`. For example, $100 becomes $80 with a 20% discount.

## Edit promotion dates
Edit `PROMOTION_START`, `PROMOTION_END`, and `DISCOUNT_PERCENT` in `script.js`. Also update the matching visible dates in `index.html` (banner and FAQ). Current dates are 5 October 2026 through 30 October 2026.

## Replace sample images
In `index.html`, search for `images.unsplash.com` and replace each image URL with your own portfolio image URL. Alternatively, create an `images` folder and use paths such as `images/portfolio-01.jpg`. Only publish images you own or have permission to use. Some sample photos are remote, so internet access is needed to load them.

## Make it your studio
The brand name is set to `CHROMINK STUDIO`; replace the about text, and footer social link with your actual studio details. No address, credentials, or reviews have been invented. Add only verified information.

The $150 USD deposit notice is displayed as requested. Customers are told to contact the studio to confirm deposit terms before paying. The website does not collect payment or card information. The form opens WhatsApp with prefilled details; it does not save bookings or confirm appointments automatically.

## Publish free with GitHub Pages
1. Sign in to GitHub and create a repository, for example `tattoo-studio-website`.
2. Upload `index.html`, `style.css`, `script.js`, and any local `images` folder to the repository root.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. Wait for deployment. GitHub will show the public site URL in the Pages settings.
7. Open the URL on a phone and computer; test the navigation, form validation, and WhatsApp links.

Google Fonts and the sample Unsplash photos require an internet connection. The website itself is static and compatible with GitHub Pages and similar free static hosts.
