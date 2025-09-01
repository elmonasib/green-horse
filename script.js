// ضع هنا رابط ملف JSON الخارجي (عدله حسب رابطك الحقيقي)
const DATA_URL = "https://raw.githubusercontent.com/elmonasib/green-horse/main/data.json";

// Sidebar
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// 🔹 تحميل البيانات من الرابط الخارجي
fetch(DATA_URL)
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(data => {
    // Date
    document.getElementById("date").textContent = data.date;
    document.getElementById("date-rapport").textContent = data.date;

    // Pronostic
    document.getElementById("pronostic-title").textContent = data.pronostic.title;
    document.getElementById("pronostic-names").textContent = data.pronostic.names;
    document.getElementById("pronostic-numbers").textContent = data.pronostic.numbers;

    // Rapport
    document.getElementById("rapport-title").textContent = data.rapport.title;
    document.getElementById("rapport-numbers").textContent = data.rapport.numbers;
    document.getElementById("rapport-order").textContent = data.rapport.order;
    document.getElementById("rapport-desorde").textContent = data.rapport.desorde;
    document.getElementById("rapport-qoarti").textContent = data.rapport.qoarti;
    document.getElementById("rapport-terce").textContent = data.rapport.terce;
  })
  .catch(err => {
    console.error("❌ Error loading data.json:", err);
    alert("تعذر تحميل البيانات. تحقق من الرابط.");
  });
