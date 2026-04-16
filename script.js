// ===== INIT =====
let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  if (slides[index]) {
    slides[index].classList.add("active");
  }
}

function nextSlide() {
  current++;
  if (current < slides.length) {
    showSlide(current);
  }
}


// ===== MUSIC =====
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
  if (!music) return;

  if (music.paused) {
    music.play().catch(() => {});
    if (musicBtn) musicBtn.innerText = "⏸ Pause";
  } else {
    music.pause();
    if (musicBtn) musicBtn.innerText = "🎵 Play";
  }
}

// autoplay setelah klik pertama (biar lolos aturan browser)
document.body.addEventListener("click", function () {
  if (music && music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });


// ===== LOVE EFFECT =====
function createLove() {
  const love = document.createElement("div");
  love.className = "love";
  love.innerText = "❤";

  love.style.left = Math.random() * 100 + "vw";
  love.style.animationDuration = (3 + Math.random() * 2) + "s";

  document.body.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 5000);
}

// sedikit diperlambat biar ga terlalu rame
setInterval(createLove, 500);
