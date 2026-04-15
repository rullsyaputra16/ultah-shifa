// ===== SLIDE LOGIC =====
let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  current++;
  if (current < slides.length) {
    showSlide(current);
  }
}

// ===== LOVE EFFECT =====
function createLove() {
  const love = document.createElement("div");
  love.className = "love";
  love.innerText = "❤";

  // posisi random
  love.style.left = Math.random() * 100 + "vw";

  // kecepatan jatuh random
  love.style.animationDuration = (3 + Math.random() * 2) + "s";

  document.body.appendChild(love);

  // hapus setelah selesai
  setTimeout(() => {
    love.remove();
  }, 5000);
}

// spawn love tiap interval
setInterval(createLove, 300);
