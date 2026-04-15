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

// MUSIC
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "⏸ Pause";
  } else {
    music.pause();
    musicBtn.innerText = "🎵 Play";
  }
}

// auto play setelah klik pertama
document.body.addEventListener("click", function () {
  if (music.paused) {
    music.play();
  }
}, { once: true });

// LOVE EFFECT
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

setInterval(createLove, 300);
