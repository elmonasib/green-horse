// رابط JSON خارجي من GitHub (ضع الرابط raw هنا)
const jsonURL = 'https://raw.githubusercontent.com/elmonasib/green-horse/main/data.json';

// Sidebar toggle
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
    const response = await fetch(jsonURL);
    const data = await response.json();

    // Pronostic
    document.getElementById('date-pronostic').innerText = data.date_pronostic;
    document.getElementById('pronostic-title').innerText = data.pronostic.title;
    document.getElementById('pronostic-names').innerHTML = data.pronostic.names.replace(/\n/g, '<br>');
    document.getElementById('pronostic-numbers').innerText = data.pronostic.numbers;

    // Rapport
    document.getElementById('date-rapport').innerText = data.date_rapport;
    document.getElementById('rapport-title').innerText = data.rapport.title;
    document.getElementById('rapport-numbers').innerText = data.rapport.numbers;
    document.getElementById('rapport-order').innerText = data.rapport.order;
    document.getElementById('rapport-desorde').innerText = data.rapport.desorde;
    document.getElementById('rapport-qoarti').innerText = data.rapport.qoarti;
    document.getElementById('rapport-terce').innerText = data.rapport.terce;

  } catch (error) {
    console.error('Erreur lors du chargement du JSON:', error);
  }
}

window.addEventListener('DOMContentLoaded', loadData);
