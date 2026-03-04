import { initNav } from './nav.js';
import { initHero } from './hero.js';
import { initCounters } from './counter.js';
import { initSkills } from './skills.js';
import { initProjects } from './projects.js';
import { initAnimations } from './animations.js';
import { initMap } from './travel.js';

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

  // Blog tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`)?.classList.remove('hidden');
    });
  });

  initNav();
  initHero();
  initCounters();
  initSkills();
  initProjects();
  initAnimations();
  initMap();
});
