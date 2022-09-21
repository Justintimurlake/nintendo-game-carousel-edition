export default function allCategories() {
  const selected = document.querySelector('.selected');
  const optionsContainer = document.querySelector(
    '.options-container'
  );
  const chevronDown = document.querySelector('.fa-chevron-down');
  const activeBg = document.querySelector('.active-bg');
  const optionsList = document.querySelectorAll('.option');

  selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
    chevronDown.classList.toggle('active1');
    activeBg.style.display = 'block';
  });

  optionsList.forEach((item) => {
    item.addEventListener('click', () => {
      selected.innerHTML = item.querySelector('label').innerHTML;
      optionsContainer.classList.remove('active');
      activeBg.style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    const target = e.target;
    if (target === activeBg) {
      optionsContainer.classList.toggle('active');
      chevronDown.classList.toggle('active1');
      activeBg.style.display = 'none';
    }
  });
}
