const stars = document.querySelectorAll('.fa-star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    stars.forEach(s => s.classList.remove('checked')); // Remove 'checked' class from all stars
    star.classList.add('checked'); // Add 'checked' class to the clicked star
  });
});

