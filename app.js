// Grab elements
const bgs = document.querySelectorAll('.bg');
const panels = document.querySelectorAll('.panel');
const crumb = document.querySelector('.crumb');

// Observe panels to swap background, reveal text, and update the label
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Reveal card
    const card = entry.target.querySelector('.card');
    if (card) card.classList.add('reveal');

    // Swap background
    const id = entry.target.dataset.visual; // v1..v5
    if (id){
      bgs.forEach(bg => bg.classList.toggle('show', bg.classList.contains(id)));
    }

    // Update section label
    const label = entry.target.dataset.crumb || '…';
    crumb.textContent = label;
  });
}, { threshold: 0.66 });

panels.forEach(p => io.observe(p));