document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  let interval;

  function showSlide(i) {
    slides.forEach((slide, j) => {
      slide.classList.toggle('ativo', j === i);
    });
  }

  function nextSlide() {
    idx = (idx + 1) % slides.length;
    showSlide(idx);
  }

  function prevSlide() {
    idx = (idx - 1 + slides.length) % slides.length;
    showSlide(idx);
  }

  document.querySelector('.carrossel-prev').onclick = function() {
    prevSlide();
    resetInterval();
  };

  document.querySelector('.carrossel-next').onclick = function() {
    nextSlide();
    resetInterval();
  };

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 4000); // Troca a cada 4 segundos
  }

  showSlide(idx);
  interval = setInterval(nextSlide, 4000);
});