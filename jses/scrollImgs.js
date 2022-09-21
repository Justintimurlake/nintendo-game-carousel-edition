export default function scrollImgs() {
  document.addEventListener('click', (e) => {
    let handle;
    if (e.target.matches('.section5__handle')) {
      handle = e.target;
    } else {
      handle = e.target.closest('.section5__handle');
    }
    if (handle != null) onHandleClick(handle);
  });

  const throttleProgressBar = throttle(() => {
    document
      .querySelectorAll('.section5__progress-bar')
      .forEach(calculateProgressBar);
  }, 250);
  window.addEventListener('resize', throttleProgressBar);

  document
    .querySelectorAll('.section5__progress-bar')
    .forEach(calculateProgressBar);

  function calculateProgressBar(progressBar) {
    progressBar.innerHTML = '';
    const slider = progressBar
      .closest('.section5__row')
      .querySelector('.section5__slider');
    const itemCount = slider.children.length;
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue('--items-per-screen')
    );
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const progressBarItemCount = Math.ceil(
      itemCount / itemsPerScreen
    );

    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty(
        '--slider-index',
        progressBarItemCount - 1
      );
      sliderIndex = progressBarItemCount - 1;
    }

    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty(
        '--slider-index',
        progressBarItemCount - 1
      );
      sliderIndex = progressBarItemCount - 1;
    }

    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement('div');
      barItem.classList.add('section5__progress-bar--items');
      if (i === sliderIndex) {
        barItem.classList.add('section5__active');
      }
      progressBar.append(barItem);
    }
  }

  function onHandleClick(handle) {
    const progressBar = handle
      .closest('.section5__row')
      .querySelector('.section5__progress-bar');
    const slider = handle
      .closest('.section5__container')
      .querySelector('.section5__slider');
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const progressBarItemCount = progressBar.children.length;
    if (handle.classList.contains('section5__handle-left')) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty(
          '--slider-index',
          progressBarItemCount - 1
        );
        progressBar.children[sliderIndex].classList.remove(
          'section5__active'
        );
        progressBar.children[progressBarItemCount - 1].classList.add(
          'section5__active'
        );
      } else {
        slider.style.setProperty('--slider-index', sliderIndex - 1);
        progressBar.children[sliderIndex].classList.remove(
          'section5__active'
        );
        progressBar.children[sliderIndex - 1].classList.add(
          'section5__active'
        );
      }
    }
    if (handle.classList.contains('section5__handle-right')) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty('--slider-index', 0);
        progressBar.children[sliderIndex].classList.remove(
          'section5__active'
        );
        progressBar.children[0].classList.add('section5__active');
      } else {
        slider.style.setProperty('--slider-index', sliderIndex + 1);
        progressBar.children[sliderIndex].classList.remove(
          'section5__active'
        );
        progressBar.children[sliderIndex + 1].classList.add(
          'section5__active'
        );
      }
    }
  }

  function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }
}
