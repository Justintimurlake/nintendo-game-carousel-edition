export default function likes() {
  const heardOpen = document.querySelectorAll('.fa-heart__open ');

  heardOpen.forEach((open) => {
    open.addEventListener('click', (e) => {
      open.classList.toggle('fa-heart__open');
    });
  });
}
