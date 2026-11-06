export default function decorate(block) {
  const heading = block.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) heading.classList.add('novabank-hero-heading');
}
