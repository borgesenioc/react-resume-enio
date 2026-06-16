# Testimonial photos

Profile photos for the Testimonials section are hosted **here in the repo**, not
hotlinked from LinkedIn — LinkedIn's CDN URLs are signed and expire (they start
returning `403` after a few weeks), which is what broke the section previously.

## Adding a photo

1. Save the image in this folder, e.g. `yohan-bobcombe.jpg`
   (square images look best; they're rendered in a circle).
2. Import it at the top of `src/data/data.tsx`:
   ```ts
   import yohanPhoto from '../images/testimonials/yohan-bobcombe.jpg';
   ```
3. Set `image: yohanPhoto.src` on the matching testimonial in that file.

Until a photo is set, an initials avatar is shown automatically, so the section
never displays a broken image.
