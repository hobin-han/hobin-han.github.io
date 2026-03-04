export function initSkills() {
  const tags = document.querySelectorAll('.skill-tag[data-level]');
  if (!tags.length) return;

  tags.forEach(tag => {
    tag.style.setProperty('--skill-level', tag.dataset.level + '%');
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  tags.forEach(tag => observer.observe(tag));
}
