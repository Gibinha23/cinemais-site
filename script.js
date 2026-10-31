document.getElementById('y').textContent = new Date().getFullYear();
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.tab,.panel').forEach(e => e.classList.remove('active'));
  t.classList.add('active');
  document.getElementById(t.dataset.target).classList.add('active');
}));
