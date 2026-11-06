export default function decorate(block) {
  const rows = [...block.children];

  const contentRow = rows[0];
  const imageRow = rows[1];
  const ctaRow = rows[2];

  if (!contentRow || !imageRow || !ctaRow) {
    console.warn('NovaBank Hero: unexpected markup');
    return;
  }

  // 1. Identify the content row.
  contentRow.classList.add('novabank-hero-content');

  const heading = contentRow.querySelector(
    'h1, h2, h3, h4, h5, h6',
  );

  if (heading) {
    heading.classList.add('novabank-hero-heading');
  }

  // 2. Convert the image reference into an image.
  const imageLink = imageRow.querySelector('a[href]');

  if (imageLink) {
    const image = document.createElement('img');

    image.src = imageLink.href;
    image.alt = imageLink.textContent.trim();
    image.loading = 'eager';
    image.decoding = 'async';

    imageLink.replaceWith(image);
  }

  imageRow.classList.add('novabank-hero-media');

  // 3. Decorate the CTA link.
  const cta = ctaRow.querySelector('a[href]');

  if (cta) {
    cta.classList.add('novabank-hero-button');
  }

  ctaRow.classList.add('novabank-hero-actions');

  // 4. Mark the component as decorated.
  block.classList.add('novabank-hero-ready');
}
