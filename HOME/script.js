const images = document.querySelectorAll('.slider span');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');

let current = 1;
const imgSize = images[0].clientWidth;

slider.style.transform = `translateX(${-imgSize}px)`;

prevBtn.addEventListener('click',()=>{

  console.log(current);
    if(current <= 0) return;
    slider.style.transition = '600ms ease-in-out transform';
    current--;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
})

nextBtn.addEventListener('click',()=>{

  console.log(current);
    if( current >= images.length -1 ) return;
    slider.style.transition = '600ms ease-in-out transform';
    current++;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
})

slider.addEventListener('transitionend', ()=> {
    if(images[current].classList.contains('first-img')){
        slider.style.transition = 'none';
        current = images.length - 2;
       // slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
    if(images[current].classList.contains('last-img')){
        slider.style.transition = 'none';
        current = images.length - current ;
      //  slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
})

const next = () => {
  if (current >= images.length - 1) return;
  slider.style.transition = '600ms ease-in-out transform';
  current++;
  slider.style.transform = `translateX(${-imgSize * current}px)`;
  
}

let auto = setInterval(next, 3000);

slider.addEventListener('mouseleave', ()=>{
    auto = setInterval(next, 3000)
})

slider.addEventListener('mouseenter', ()=>{
    clearInterval(auto)
})

nextBtn.addEventListener('click', () => {
  next()
})

const list = document.querySelector('.memos');

const input = document.getElementById('board_input');
const submit= document.getElementById('submit');
let str = localStorage.getItem('memo');

if(str){
  let arr = str.split(" ");
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i] != "null"){
      const html = `<li class="list-group-item ">
  <span>${arr[i]}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`
  list.innerHTML += html;
}
}}



submit.addEventListener('click', e =>{
  e.preventDefault();
  const memo = input.value;

  console.log(str);
  if(memo.length){
   
    saveMemo(memo);   
    input.value = '';
    str = str + " " + memo;
    localStorage.setItem('memo', str);
 
}


})

const saveMemo = memotext => {
  const html = `<li class="list-group-item ">
  <span>${memotext}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`
  list.innerHTML += html;
}

