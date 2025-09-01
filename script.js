// Sidebar toggle
const DATA_URL = "https://raw.githubusercontent.com/elmonasib/green-horse/main/data.json";
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

document.getElementById('menuBtn').addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

document.getElementById('closeSidebar').addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

// Load JSON data
async function loadData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    // Pronostic
    document.getElementById('pronostic-title').innerText = data.pronostic.title;
    // تحويل '\n' إلى أسطر HTML
    document.getElementById('pronostic-names').innerHTML = data.pronostic.names.replace(/\n/g, '<br>');
    document.getElementById('pronostic-numbers').innerText = data.pronostic.numbers;
    document.getElementById('date').innerText = data.date_pronostic;

    // Rapport
    document.getElementById('rapport-title').innerText = data.rapport.title;
    document.getElementById('rapport-numbers').innerText = data.rapport.numbers;
    document.getElementById('date-rapport').innerText = data.date_rapport;
    document.getElementById('rapport-order').innerText = data.rapport.order;
    document.getElementById('rapport-desorde').innerText = data.rapport.desorde;
    document.getElementById('rapport-qoarti').innerText = data.rapport.qoarti;
    document.getElementById('rapport-terce').innerText = data.rapport.terce;

  } catch (error) {
    console.error('Erreur lors du chargement du JSON:', error);
  }
}

window.addEventListener('DOMContentLoaded', loadData);

