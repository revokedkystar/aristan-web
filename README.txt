Quick check summary

index.html

Paths are correct:
Tailwind and Google Fonts CDN links look fine.
Swiper CSS/JS CDN links are correct.

Custom CSS: href="css/styles.css" matches the file.
Script: src="js/script.js" matches the file.
Swiper markup is valid: you have .swiper.hero-swiper > .swiper-wrapper > .swiper-slide structure, which matches Swiper’s expectations.

Menus button: the new “View Menus” button is valid HTML and will open menus.pdf in a new tab if that file exists next to index.html.
css/styles.css
No syntax errors.
.hero-swiper and .hero-swiper .swiper-slide(.swiper-slide-active) styles match the Swiper classes used in the HTML.
Global, gallery, and form styles are all valid.
js/script.js
No linter errors reported.

Logic is sound:
Waits for DOMContentLoaded.
Initializes new Swiper('.hero-swiper', { loop, fade, autoplay, fadeEffect }) – this matches your HTML.
Header scroll shadow logic is fine.
Gallery toggle logic is guarded by if (viewMoreBtn && extraGallery) so it won’t throw if those elements are missing.
Bottom line
No syntax or obvious runtime errors in these three files.

If something still isn’t behaving as you expect (e.g. carousel not fading, button not opening), it’s likely due to:
The PDF file path (ensure menus.pdf exists where index.html is, or adjust the href).
A browser console error from something else (if you see any red errors in DevTools, tell me what they say and I’ll decode them).
