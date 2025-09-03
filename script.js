const DATA_URL = "https://raw.githubusercontent.com/elmonasib/green-horse/main/data.json";

// Sidebar toggle
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

if(menuBtn && sidebar && closeSidebar && overlay){
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
}

// Load JSON data
fetch(DATA_URL)
  .then(res => {
    if(!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(data => {
    // === Pronostic page ===
    if(document.getElementById("pronostic-date")){
      document.getElementById("pronostic-date").textContent = data.pronostic.date;
      document.getElementById("pronostic-title").textContent = data.pronostic.title;
      document.getElementById("pronostic-names").textContent = data.pronostic.names;
      document.getElementById("pronostic-numbers").textContent = data.pronostic.numbers;

      for(let i=1;i<=8;i++){
        const el = document.getElementById("course-"+i);
        if(el) el.textContent = data.pronostic_reunion1["course"+i];
      }
    }

    // === Rapport page ===
    if(document.getElementById("rapport-quinte-date")){
      document.getElementById("rapport-quinte-date").textContent = data.rapport_quinte.date;
      document.getElementById("rapport-quinte-numbers").textContent = data.rapport_quinte.numbers;
      document.getElementById("rapport-quinte-order").textContent = data.rapport_quinte.order;
      document.getElementById("rapport-quinte-desorde").textContent = data.rapport_quinte.desorde;
      document.getElementById("rapport-quinte-qoarti").textContent = data.rapport_quinte.qoarti;
      document.getElementById("rapport-quinte-terce").textContent = data.rapport_quinte.terce;

      document.getElementById("rapport-reunion1-date").textContent = data.rapport_reunion1.date;
      for(let i=1;i<=8;i++){
        const el = document.getElementById("rapport-reunion1-course"+i);
        if(el) el.textContent = data.rapport_reunion1["course"+i];
      }
    }

  })
  .catch(err => {
    console.error("Error loading JSON:", err);
  });

// =====================
// Pull-to-Refresh (Touch) للهواتف
let startY = 0;
let threshold = 100; // المسافة بالبيكسل للسحب قبل التحديث

window.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

window.addEventListener("touchmove", (e) => {
  const currentY = e.touches[0].clientY;
  if(currentY - startY > threshold){
    location.reload(); // إعادة تحميل الصفحة عند سحب كافي للأسفل
  }
});
