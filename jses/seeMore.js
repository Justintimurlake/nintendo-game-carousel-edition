export default function seeMore() {
  var dotsSeeMore = document.querySelector('.section2--dots');
  var moreText = document.querySelector('.section2--see-more');
  var btnSeeMore = document.querySelector('.section2-read-more__btn');
  var btnPlus = document.querySelector('.plus-read-more');
  var btnMinus = document.querySelector('.minus-read-more');

  btnSeeMore.addEventListener('click', () => {
    if (dotsSeeMore.style.display === 'none') {
      dotsSeeMore.style.display = 'inline';
      btnSeeMore.innerText = 'Read more';
      moreText.style.display = 'none';

      btnPlus.style.display = 'inline';
      btnMinus.style.display = 'none';
    } else {
      dotsSeeMore.style.display = 'none';
      btnSeeMore.innerText = 'Read less';
      moreText.style.display = 'inline';
      btnPlus.style.display = 'inline';
      btnMinus.style.display = 'none';
      btnPlus.style.display = 'none';
      btnMinus.style.display = 'block';
    }
  });
}
