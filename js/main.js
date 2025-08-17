document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelectorAll('#year').forEach(el => el.textContent = year);
  console.log("ℹ️ Footer year 업데이트 완료");

  // Leaflet map init
  const map = L.map('map').setView([42, 64], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const trips = [
    { coords: [52.3676, 4.9041], label: "2025 - Amsterdam, Netherlands" },
    { coords: [48.8566, 2.3522], label: "2025 - Paris, France" },
    { coords: [41.3851, 2.1734], label: "2025 - Barcelona, Spain" },
    { coords: [40.4168, -3.7038], label: "2025 - Madrid, Spain" },
    { coords: [35.6895, 139.6917], label: "2024 - Tokyo, Japan" },
    { coords: [25.0330, 121.5654], label: "2024 - Taipei, Taiwan" },
    { coords: [22.6273, 120.3014], label: "2024 - Kaohsiung, Taiwan" },
    { coords: [22.3193, 114.1694], label: "2019 - Hong Kong" },
    { coords: [16.0544, 108.2022], label: "2018 - Danang, Vietnam" },
    { coords: [34.6937, 135.5023], label: "2015 - Osaka, Japan" },
  ];

  trips.forEach(t => {
    L.marker(t.coords).addTo(map).bindPopup(t.label);
  });
});