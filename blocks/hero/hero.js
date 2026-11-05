export default function decorate(block) {
  const rows = [...block.children];

  const imageRow = rows[0];
  const contentRow = rows[1];

  if (!imageRow || !contentRow) {
    console.warn('Hero: expected image and content rows');
    return;
  }

  // Find the authored asset reference.
  const imageLink = imageRow.querySelector('a[href]');

  if (imageLink) {
    const image = document.createElement('img');

    image.src = imageLink.href;
    image.alt = imageLink.textContent.trim() || '';
    image.loading = 'eager';
    image.decoding = 'async';

    // Replace the asset link with the image.
    imageLink.replaceWith(image);
  }

  // Find the heading authored in the rich text field.
  const heading = contentRow.querySelector(
    'h1, h2, h3, h4, h5, h6',
  );

  if (heading) {
    heading.classList.add('novabank-hero-heading');
  }

  imageRow.classList.add('novabank-hero-media');
  contentRow.classList.add('novabank-hero-content');

  block.classList.add('novabank-hero-enhanced');
}
