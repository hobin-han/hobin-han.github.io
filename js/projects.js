const PROJECTS = [
  {
    icon: '▶',
    gradient: 'gradient-1',
    title: 'SwiftAVPlayer',
    tags: ['Swift', 'AVFoundation', 'Combine', 'UIKit'],
    desc: 'A comprehensive iOS media player with playback controls, real-time progress tracking, variable speed, and Combine-based state management.',
    github: 'https://github.com/hobin-han/SwiftAVPlayer',
    video: 'assets/videos/SwiftAVPlayer.mp4',
  },
  {
    icon: '🎰',
    gradient: 'gradient-2',
    title: 'SlotMachineAnimator',
    tags: ['Swift', 'UIKit', 'Core Animation'],
    desc: 'A lightweight UIKit-based slot machine animator for iOS with precise, customizable spin-to-index control.',
    github: 'https://github.com/hobin-han/SlotMachineAnimator',
    video: 'assets/videos/SlotMachineAnimator.mp4',
  },
  {
    icon: '⚡',
    gradient: 'gradient-3',
    title: 'Sendable-Concurrency',
    tags: ['Swift', 'Swift Concurrency', 'Sendable'],
    desc: 'Explores the Sendable protocol and structured concurrency for writing safe, concurrent Swift code in real-world scenarios.',
    github: 'https://github.com/hobin-han/Sendable-Concurrency',
    video: null,
  },
];

function renderProjects() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card reveal">
      <div class="project-header ${p.gradient}">
        <div class="project-icon">${p.icon}</div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-actions">
          ${p.video ? '<button class="btn-demo">▶ Watch Demo</button>' : ''}
          <a class="btn ghost btn-sm" href="${p.github}" target="_blank" rel="noopener">GitHub</a>
        </div>
        ${p.video ? `
        <div class="video-wrapper">
          <video controls width="100%" preload="metadata">
            <source src="${p.video}" type="video/mp4">
          </video>
        </div>` : ''}
      </div>
    </article>
  `).join('');
}

export function initProjects() {
  renderProjects();
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
