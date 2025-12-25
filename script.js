/* ======================
   מחשבון אלומיניום
====================== */
function calc() {
  const width = document.getElementById("width");
  const height = document.getElementById("height");
  const result = document.getElementById("result");

  if (!width || !height || !result) return;

  if (width.value === "" || height.value === "") {
    alert("נא להזין רוחב וגובה");
    return;
  }

  const price = width.value * height.value * 2;
  result.innerText = "מחיר משוער: " + price + " ₪";
}

/* ======================
   אפקט טעינה
====================== */
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "0.8s";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".nav-toggle-button");
  const navMenu = document.querySelector(".nav-menu");

  // פתיחה/סגירה של המבורגר
  toggleButton?.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // סוגר את התפריט בכל לחיצה על קישור
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navMenu.classList.remove("show"); // סוגר תפריט

      const href = link.getAttribute("href");
      // אם הקישור לדף אחר (לא anchor פנימי)
      if (href && !href.startsWith("#")) {
        e.preventDefault(); // עוצר ניווט מיידי
        setTimeout(() => {
          window.location.href = href; // מבצע ניווט אחרי סגירה
        }, 150);
      }
    });
  });
});
