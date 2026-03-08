import { initNav } from './nav.js';
import { initHero } from './hero.js';
import { initCounters } from './counter.js';
import { initSkills } from './skills.js';
import { initProjects } from './projects.js';
import { initAnimations } from './animations.js';
import { initMap } from './travel.js';

function calcCareerYears() {
  const start = new Date(2018, 4, 4); // May 4, 2018
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (now < new Date(now.getFullYear(), 4, 4)) years--;
  return years;
}

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

  // Career years (dynamic)
  const yrs = calcCareerYears();
  const statEl = document.getElementById('stat-years-ios');
  if (statEl) statEl.dataset.target = yrs;
  document.querySelectorAll('#career-years, #career-years-about').forEach(el => el.textContent = yrs);

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
