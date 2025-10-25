// Pesan selamat datang
window.onload = function() {
  alert("Selamat datang di Web Sederhana!");
};

// Fungsi navigasi dinamis
const menuLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");



// Validasi form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua kolom wajib diisi!");
    e.preventDefault();
  } else {
    alert("Pesan berhasil dikirim! Terima kasih, " + nama + " 😊");
  }
});
