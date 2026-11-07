export default function decorate(block) {
  const rows = [...block.children];

  const contentRow = rows[0];
  const imageRow = rows[1];
  const ctaRow = rows[2];

  // Content is optional; don't fail the whole block.
  if (contentRow) {
    contentRow.classList.add('novabank-hero-content');

    const heading = contentRow.querySelector(
      'h1, h2, h3, h4, h5, h6',
    );

    if (heading) {
      heading.classList.add('novabank-hero-heading');
    }
  }

  // Preserve the original authoring link.
  if (imageRow) {
    imageRow.classList.add('novabank-hero-media');

    const imageLink = imageRow.querySelector('a[href]');

    if (imageLink) {
      const image = document.createElement('img');

      image.src = imageLink.href;
      image.alt = imageLink.textContent.trim();
      image.decoding = 'async';
      image.loading = 'eager';

      // Add the visual image without removing
      // the authoring link.
      imageLink.parentElement.append(image);

      imageLink.classList.add('novabank-hero-asset-link');
    }
  }

  // Keep the CTA anchor editable.
  if (ctaRow) {
    ctaRow.classList.add('novabank-hero-actions');

    const cta = ctaRow.querySelector('a[href]');

    if (cta) {
      cta.classList.add('novabank-hero-button');
    }
  }

  block.classList.add('novabank-hero-ready');
}
