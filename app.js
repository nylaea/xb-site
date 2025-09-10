// When each text block comes into view, show the matching visual on the left
const visuals = document.querySelectorAll('.visual');
const blocks = document.querySelectorAll('.block');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Reveal the text block
    entry.target.classList.add('reveal');

    // Find which visual to show
    const id = entry.target.dataset.visual; // e.g., "v3"
    visuals.forEach(v => v.classList.toggle('show', v.classList.contains(id)));
  });
}, { threshold: 0.6 });

blocks.forEach(b => io.observe(b));