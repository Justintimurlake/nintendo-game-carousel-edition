export default function sidebar() {
  const sidebar = document.querySelector('.nav--sidebar');
  const sideBarBgDark = document.querySelector('.side-bar--bg__dark');
  const openSidebar = document.querySelectorAll('.open-sidebar');
  const bodySidebar = document.querySelector('body');
  const closeSidebar = document.querySelector('.close-sidebar');

  openSidebar.forEach((openSide) => {
    openSide.addEventListener('click', () => {
      sidebar.style.right = '0px';
      // sidebar.style.display = 'flex';
      sideBarBgDark.style.display = 'block';
      bodySidebar.style.overflowY = 'hidden';
    });
  });
  closeSidebar.addEventListener('click', () => {
    sidebar.style.right = '-340px';
    // sidebar.style.display = 'none';
    sideBarBgDark.style.display = 'none';
    bodySidebar.style.overflowY = 'scroll';
  });

  window.addEventListener('click', (e) => {
    const target = e.target;
    if (target === sideBarBgDark) {
      sidebar.style.right = '-340px';
      sideBarBgDark.style.display = 'none';
      bodySidebar.style.overflowY = 'scroll';
    }
  });
}
