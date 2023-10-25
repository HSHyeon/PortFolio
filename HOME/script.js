const images = document.querySelectorAll('.slider span');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');

let current = 1;
const imgSize = images[0].clientWidth;

window.onload = function () {
  loadComments();
};

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
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
    if(images[current].classList.contains('last-img')){
        slider.style.transition = 'none';
        current = images.length - current ;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
})

const next = () => {
  if (current >= images.length - 1) return;
  slider.style.transition = '600ms ease-in-out transform';
  current++;
  slider.style.transform = `translateX(${-imgSize * current}px)`;
  
}

let auto = setInterval(next, 4000);

slider.addEventListener('mouseleave', ()=>{
    auto = setInterval(next, 4000)
})

slider.addEventListener('mouseenter', ()=>{
    clearInterval(auto)
})



const list = document.querySelector('.memos');
const username = document.getElementById('input_name');
const input = document.getElementById('input_board');
const submit= document.getElementById('submit');



submit.addEventListener('click', e =>{
  e.preventDefault();
  const memo = input.value;
  const name = username.value;
  
  let newComment = {
    user: name,
    review: memo,
  };
  
  let comments = getComments();

  comments.push(newComment);
  
  localStorage.setItem('comments', JSON.stringify(comments));
  loadComments();
  username.value = '';
  input.value='';
})



function getComments() {
  let comments = localStorage.getItem('comments');

  if (comments) {
    return JSON.parse(comments);
  } else {
    return [];
  }
}

function loadComments() {

  list.innerHTML = '';

  let comments = getComments();

  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];

    const html =
    `
  <li class="list-group-item">
  <span>
  <span class="comment_name">${comment.user}</span>
  <span class="comment">${comment.review}</span></span>
  <i class="far fa-trash-alt delete"></i>
</li>
  `
     // '<strong>' + comment.user + ':</strong> ' + comment.review;

     list.innerHTML += html;
  }
}

const saveMemo = memotext => {
  const html = `<li class="list-group-item ">
  <span>${memotext}</span>
 
</li> 
`
  list.innerHTML += html;
}



list.addEventListener('click',e => {
  if(e.target.classList.contains('delete')){
      e.target.parentElement.remove();

      let comments = getComments();
      let username = e.target.parentElement.childNodes[1].childNodes[1].innerHTML;
      let contents = e.target.parentElement.childNodes[1].childNodes[3].innerHTML;

      comments.forEach((item, index)=>{
        if(item.user ===username &&item.review ===contents){
          comments.splice(index, 1);
        }
      })
  localStorage.setItem('comments', JSON.stringify(comments));
  loadComments();

    console.log(comments);
      
  }



});
