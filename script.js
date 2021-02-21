const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

function update() {
  // Addeding active class to nnumber of circle bsed in current active count
  circles.forEach((circle, index) => {
    if (index < currentActive) circle.classList.add('active');
    else circle.classList.remove('active');
  });

  // Calculates the width to be highlighted
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // Hihglighing/dusabling bbuttons
  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    next.disabled = false;
    prev.disabled = false;
  }
}
