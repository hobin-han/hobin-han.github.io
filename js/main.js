import { initNav } from './nav.js';
import { initHero } from './hero.js';
import { initCounters } from './counter.js';
import { initSkills } from './skills.js';
import { initProjects } from './projects.js';
import { initExperience } from './experience.js';
import { initBlog } from './blog.js';
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

  // Meta description (dynamic)
  const descContent = `Hobin Han — iOS Developer with ${yrs}+ years of experience. Currently at Kakao Entertainment. Passionate about code quality, team communication, and continuous improvement.`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = descContent;
  const metaOgDesc = document.querySelector('meta[property="og:description"]');
  if (metaOgDesc) metaOgDesc.content = descContent;

  initNav();
  initHero();
  initCounters();
  initSkills();
  initProjects();
  initExperience();
  initBlog();
  initAnimations();
  initMap();
});
