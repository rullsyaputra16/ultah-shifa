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

const music = document.getElementById("bgMusic");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
