// tombol & section diurutkan sesuai pasangannya
const buttons = [
  document.getElementById("To-all"),
  document.getElementById("To-webdev"),
  document.getElementById("To-webdesign"),
  document.getElementById("To-appsdesign"),
  document.getElementById("To-certificate")
];

const sections = [
  document.getElementById("Section-all"),
  document.getElementById("Section-webdev"),      // perbaiki typo di sini
  document.getElementById("Section-webdesign"),
  document.getElementById("Section-appsdesign"),
  document.getElementById("Section-certificate")
];

// fungsi hide semua
function hideAll() {
  sections.forEach(sec => {
    if (sec) sec.style.display = "none";
  });
}

// pasang event listener sekaligus (aman dari null)
buttons.forEach((btn, index) => {
  if (!btn || !sections[index]) return; // skip kalau ada yang null

  btn.addEventListener("click", () => {
    hideAll();
    sections[index].style.display = "grid"; // pakai grid biar layout tetap
  });
});