export function initProjects() {
  document.querySelectorAll('.btn-demo').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.project-card');
      const wrapper = card?.querySelector('.video-wrapper');
      if (!wrapper) return;
      const isOpen = wrapper.classList.toggle('open');
      btn.textContent = isOpen ? '✕ Close' : '▶ Watch Demo';
    });
  });
}
