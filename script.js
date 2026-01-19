const steps = document.querySelectorAll('.form-step');
const indicators = document.querySelectorAll('.step');
let current = 0;

function updateSteps() {
  steps.forEach((s, i) => s.classList.toggle('active', i === current));
  indicators.forEach((s, i) => s.classList.toggle('active', i === current));
}

document.querySelectorAll('.next').forEach(btn =>
  btn.onclick = () => { current++; updateSteps(); }
);

document.querySelectorAll('.back').forEach(btn =>
  btn.onclick = () => { current--; updateSteps(); }
);

document.getElementById('form').onsubmit = e => {
  e.preventDefault();
  current++;
  updateSteps();
};
