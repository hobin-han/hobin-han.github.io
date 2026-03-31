const EXPERIENCE = [
  {
    company: 'Kakao Entertainment',
    role: 'iOS Developer',
    period: '2020 — Present',
    desc: 'Building webtoon and novel apps for global audiences across Asia and the US.',
    apps: [
      { name: 'KakaoPage', url: 'https://apps.apple.com/kr/app/id616643813/' },
      { name: 'Tapas', url: 'https://apps.apple.com/us/app/id578836126/' },
      { name: 'KakaoWebtoon', url: 'https://apps.apple.com/kr/app/id736602666/' },
    ],
    achievements: [
      'Improved AVPlayer performance by <strong>40%</strong> through deep optimization',
      'Built iOS Ad Framework, adopted by Melon, KakaoWebtoon, and KakaoPage',
      'Led VisionOS prototype project and attended Apple Lab Sessions',
      'Supported global app launch (Taiwan, Thailand, Indonesia)',
      'Authored 8+ technical documents on iOS development',
      'Developed 7 standalone pages and a slot-machine animation feature',
    ],
    tech: ['Swift', 'Combine', 'AVPlayer', 'SwiftUI', 'Swift Concurrency', 'RxSwift', 'Firebase', 'VisionOS'],
  },
  {
    company: 'FnGuide',
    role: 'iOS Developer',
    period: '2018 — 2020',
    desc: 'Financial data and stock app development for enterprise clients.',
    apps: [],
    achievements: [
      'Managed full app lifecycle — planning, development, database, App Store deployments',
      'Supported iOS, Android, React Native, and backend (C#, ASP.NET)',
      'Built internal apps that replaced manual SMS alerts with push notifications',
      'Independently handled certificate renewals and executive-level tech presentations',
    ],
    tech: ['Swift', 'Objective-C', 'React Native', 'C#', 'Node.js', 'Oracle DB'],
  },
];

export function initExperience() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;
  timeline.innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-content card">
        <div class="timeline-header">
          <h3 class="timeline-company">${e.company}</h3>
          <span class="timeline-role">${e.role}</span>
          <span class="timeline-period">${e.period}</span>
        </div>
        <p class="timeline-desc">${e.desc}</p>
        ${e.apps.length ? `
        <div class="app-chips">
          ${e.apps.map(a => `<a class="chip" href="${a.url}" target="_blank" rel="noopener">${a.name}</a>`).join('')}
        </div>` : ''}
        <ul class="timeline-achievements">
          ${e.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
        <div class="tech-pills">
          ${e.tech.map(t => `<span class="pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}
