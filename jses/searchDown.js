export default function searchDown() {
  const btnCloseSearch = document.querySelector('.nav-search-close ');
  const searchBg = document.querySelector('.search__bg ');
  const navSearchAbsolute = document.querySelector(
    '.nav-search__absolute '
  );

  const searchActivatorDown = document.querySelector(
    '.form-search-nav--down'
  );

  const searchActivator = document.querySelector('.form-search-nav');

  searchActivator.addEventListener('click', () => {
    navSearchAbsolute.style.display = 'block';
    searchBg.style.display = 'block';
  });
  searchActivatorDown.addEventListener('click', () => {
    navSearchAbsolute.style.display = 'block';
    searchBg.style.display = 'block';
  });

  btnCloseSearch.addEventListener('click', () => {
    navSearchAbsolute.style.display = 'none';
    searchBg.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    const target = e.target;
    if (target === searchBg) {
      navSearchAbsolute.style.display = 'none';
      searchBg.style.display = 'none';
    }
  });
}
