export default function hoverEffectNav() {
  const searchNav = document.querySelector('.form-search-nav');
  const glass = document.querySelector('.fa-magnifying-glass');
  const searchNavSearch = document.querySelector(
    '.form-search-nav__search'
  );

  searchNav.addEventListener('mouseover', () => {
    glass.style.color = '#df0000';
    searchNavSearch.style.color = '#df0000';
  });
  searchNav.addEventListener('mouseout', () => {
    glass.style.color = '#3c3c3c';
    searchNavSearch.style.color = '#3c3c3c';
  });
}
