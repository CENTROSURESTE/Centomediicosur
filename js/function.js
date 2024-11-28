document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
      const rating = this.getAttribute('data-value');
      document.querySelectorAll('.star i').forEach(icon => {
        icon.classList.remove('fas');
        icon.classList.add('far');
      });
      for (let i = 0; i < rating; i++) {
        document.querySelectorAll('.star i')[i].classList.remove('far');
        document.querySelectorAll('.star i')[i].classList.add('fas');
      }
      const feedback = document.getElementById('rating-feedback');
      feedback.textContent = `¡Gracias por tu calificación de ${rating} estrella(s)!`;
    });
  });