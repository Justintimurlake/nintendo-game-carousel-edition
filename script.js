import allCategories from './jses/allCategories.js';
import hoverEffectNav from './jses/hoverEffectNav.js';
import likes from './jses/likes.js';
import searchDown from './jses/searchDown.js';
import sidebar from './jses/sidebar.js';
import section1 from './jses/section1.js';
import seeMore from './jses/seeMore.js';
import section2Carousel from './jses/section2Carousel.js';
import scrollImgs from './jses/scrollImgs.js';

allCategories();
hoverEffectNav();
likes();
searchDown();
sidebar();
section1();
seeMore();
section2Carousel();
scrollImgs();

// --BTNS

const DBClock = document.querySelectorAll(
  '.lower-navBar__main-menu--herader-close'
);
const DBGoBack = document.querySelectorAll(
  '.lower-navBar__main-menu--herader-go-back'
);

const DBOpenDownSide = document.querySelector(
  '.lower-navBar-open-open-close'
);

// const DBCloseDownSide = document.querySelectorAll(
//   '.lower-navBar-close-open-close'
// );

// --links

const DBGoGames = document.querySelector(
  '.lower-navBar__main-menu--li--go--games'
);

const DBGoStore = document.querySelector(
  '.lower-navBar__main-menu--li--go--store'
);

const DBGoSwitch = document.querySelector(
  '.lower-navBar__main-menu--li--go--switch'
);

const DBGoNintendo = document.querySelector(
  '.lower-navBar__main-menu--li--go--play-nintendo'
);

// --pages

const DBMainPage = document.querySelector('.lower-navBar__main-menu');

const DBStarter = document.querySelector(
  '.lower-navBar__main-menu--starter'
);

const DBPlayNintendoPage = document.querySelector(
  '.lower-navBar__main-menu--play-nintendo'
);

const DBSwitchPage = document.querySelector(
  '.lower-navBar__main-menu--switch'
);

const DBGamePage = document.querySelector(
  '.lower-navBar__main-menu--game'
);

const DBStorePage = document.querySelector(
  '.lower-navBar__main-menu--store'
);

// --features

const DBDarkPage = document.querySelector(
  '.lower-navBar__main-menu--dark'
);
const DBbodySidebar = document.querySelector('body');
// --stuff

DBOpenDownSide.addEventListener('click', () => {
  DBDarkPage.style.display = 'block';
  DBbodySidebar.style.overflowY = 'hidden';
  DBMainPage.style.display = 'block';
});

// --stuff-in0page

DBClock.forEach((cloceBtn) => {
  cloceBtn.addEventListener('click', () => {
    DBMainPage.style.display = 'none';
    DBStarter.style.display = 'none';
    DBPlayNintendoPage.style.display = 'none';
    DBSwitchPage.style.display = 'none';
    DBGamePage.style.display = 'none';
    DBStorePage.style.display = 'none';
    DBDarkPage.style.display = 'none';
    DBbodySidebar.style.overflowY = 'scroll';
  });
});

DBDarkPage.addEventListener('click', () => {
  DBMainPage.style.display = 'none';
  DBStarter.style.display = 'none';
  DBPlayNintendoPage.style.display = 'none';
  DBSwitchPage.style.display = 'none';
  DBGamePage.style.display = 'none';
  DBStorePage.style.display = 'none';
  DBDarkPage.style.display = 'none';
  DBbodySidebar.style.overflowY = 'scroll';
});

DBGoBack.forEach((goBackBtn) => {
  goBackBtn.addEventListener('click', () => {
    // DBMainPage.style.display = 'none';
    // DBStarter.style.display = 'none';
    DBPlayNintendoPage.style.display = 'none';
    DBSwitchPage.style.display = 'none';
    DBGamePage.style.display = 'none';
    DBStorePage.style.display = 'none';
  });
});

DBGoGames.addEventListener('click', () => {
  DBGamePage.style.display = 'block';
});
DBGoNintendo.addEventListener('click', () => {
  DBPlayNintendoPage.style.display = 'block';
});

DBGoStore.addEventListener('click', () => {
  DBStorePage.style.display = 'block';
});
DBGoSwitch.addEventListener('click', () => {
  DBSwitchPage.style.display = 'block';
});
