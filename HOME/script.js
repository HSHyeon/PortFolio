const quickIconContainer = document.querySelector(".quick-icons");


const home = document.querySelector(".home");
const homeOptions = {
  threshold: 0.8,
};

const images = document.querySelectorAll('.slider span');
const sliderContainer = document.querySelector('slider-container');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');

let current = 1;
const imgSize = images[0].clientWidth;

slider.style.transform = `translateX(${-imgSize}px)`;

prevBtn.addEventListener('click',()=>{
    if( current <= 0) return;
    slider.style.transition = '400ms ease-in-out transform';
    current--;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
})

nextBtn.addEventListener('click',()=>{
    if( current >= images.length -1 ) return;
    slider.style.transition = '400ms ease-in-out transform';
    current++;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
})

slider.addEventListener('transitionend', ()=> {
    if(images[current].classList.contains('first-img')){
        slider.style.transition = 'none';
        current = images.length - 2;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
    if(images[current].classList.contains('last-img')){
        slider.style.transition = 'none';
        current = images.length - current;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
})



const handleHome = (entries) => {
    if (entries[0].isIntersecting) {
      quickIconContainer.classList.add("show-off");
    } else {
      quickIconContainer.classList.remove("show-off");
    }
  };

  const homeIcon = icons[0].firstChild;
  homeIcon.addEventListener("click", () => {
    icons.forEach((icon) => icon.classList.remove("icon-active"));
  });
  
  const options = {
    root: null, //default : viewport .. 부모컨테이너를 지정해줄 수 있다.
    rootMargin: `0px`, //마진을 주면, 내가 보는 화면보다 기준영역이 그 만큼 더 늘어나게된다.
    threshold: 0.5, //얼마만큼 보여져야 콜백함수를 호출할지 결정  0~1 줄 수 있다.
  };
  
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "about__traveling":
            icons.forEach((icon) => icon.classList.remove("icon-active"));
            icons[1].classList.add("icon-active");
            break;
          case "about__major":
            icons.forEach((icon) => icon.classList.remove("icon-active"));
            icons[2].classList.add("icon-active");
            break;
          default:
            icons.forEach((icon) => icon.classList.remove("icon-active"));
            break;
        }
      } 
    });
  };

const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section)); //section들을 관찰자가 관찰하도록 명령
  