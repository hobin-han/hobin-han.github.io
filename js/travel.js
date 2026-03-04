export function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  const map = L.map('map', { scrollWheelZoom: false }).setView([42, 64], 2);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const svgIcon = L.divIcon({
    className: '',
    html: `<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="5" fill="#7cccaa" stroke="#0b0d12" stroke-width="2"/>
    </svg>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10]
  });

  const trips = [
    { coords: [52.3676, 4.9041],   label: '2025 · Amsterdam, Netherlands' },
    { coords: [48.8566, 2.3522],   label: '2025 · Paris, France' },
    { coords: [41.3851, 2.1734],   label: '2025 · Barcelona, Spain' },
    { coords: [40.4168, -3.7038],  label: '2025 · Madrid, Spain' },
    { coords: [35.6895, 139.6917], label: '2024 · Tokyo, Japan' },
    { coords: [25.0330, 121.5654], label: '2024 · Taipei, Taiwan' },
    { coords: [22.6273, 120.3014], label: '2024 · Kaohsiung, Taiwan' },
    { coords: [22.3193, 114.1694], label: '2019 · Hong Kong' },
    { coords: [16.0544, 108.2022], label: '2018 · Danang, Vietnam' },
    { coords: [34.6937, 135.5023], label: '2015 · Osaka, Japan' },
  ];

  trips.forEach(t => L.marker(t.coords, { icon: svgIcon }).addTo(map).bindPopup(t.label));
}
