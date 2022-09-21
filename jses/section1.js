export default function section1() {
  const highlight = document.querySelector('.gallery-hightlight');
  const previews = document.querySelectorAll('.room-preview img');

  function imageGallery() {
    previews.forEach((preview) => {
      preview.addEventListener('click', function () {
        const smallSrc = this.src;
        //   const bigSrc = smallSrc.replace('small', 'big');
        previews.forEach((preview) =>
          preview.classList.remove('room-active')
        );
        highlight.src = smallSrc;
        preview.classList.add('room-active');
      });
    });
  }

  imageGallery();

  const kissClose = document.querySelector('.kiss-close');
  const kissOpen = document.querySelector('.kiss-open');

  function kisses() {
    kissOpen.addEventListener('click', () => {
      kissClose.style.display = 'block';
      kissOpen.style.display = 'none';
    });
    kissClose.addEventListener('click', () => {
      kissClose.style.display = 'none';
      kissOpen.style.display = 'block';
    });
  }
  kisses();

  var previousBtnRoom = document.querySelectorAll(
    '.room-gallery__left'
  );

  for (var i = 0; i < previousBtnRoom.length; i++) {
    var self = previousBtnRoom[i];

    self.addEventListener('click', function prev() {
      if (i <= 0) i = images.length;
      i--;
      return setImg();
    });
  }
  var nextBtnRoom = document.querySelectorAll('.room-gallery__right');
  nextBtnRoom.forEach((nextB) => {
    nextB.addEventListener('click', function next() {
      if (i >= images.length - 1) i = -1;
      i++;
      return setImg();
    });
  });

  const slider_img = document.querySelector('.gallery-hightlight');
  var images = [
    'content1--middle__img1.jpeg',
    'content1--middle__img2.jpeg',
    'content1--middle__img3.jpeg',
    'content1--middle__img4.avif',
    'content1--middle__img5.avif',
    'content1--middle__img6.avif',
    'content1--middle__img7.avif',
    'content1--middle__img8.avif',
  ];
  var i = 0;

  function setImg() {
    return slider_img.setAttribute('src', './images/' + images[i]);
  }
}
