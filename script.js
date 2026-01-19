const steps = document.querySelectorAll('.step-content');
const tabs = document.querySelectorAll('.step');
let index = 0;

function showStep(i) {
  steps.forEach((s, n) => s.classList.toggle('active', n === i));
  tabs.forEach((t, n) => t.classList.toggle('active', n === i));
}

document.querySelectorAll('.btn-next').forEach(b =>
  b.onclick = () => showStep(++index)
);

document.querySelectorAll('.btn-back').forEach(b =>
  b.onclick = () => showStep(--index)
);

document.getElementById('form').onsubmit = e => {
  e.preventDefault();
  showStep(++index);
};

showStep(index);
