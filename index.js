//image_slider
let sliderBackground = document.querySelector('.eighth_1');
let forwardButton = document.querySelector('.forward_button');
let backButton = document.querySelector('.back_button');

let counter = 0;

forwardButton.addEventListener('click', function(){
  sliderBackground.animate([{opacity:0.5},{opacity:1}],{duration:1000, fill:'forwards'});
  counter++;
  if(counter == 5){
    counter = 0
  }
  sliderBackground.style.background = `url(img/sliderImg_${counter}.jpeg) center/cover no-repeat`;
});

backButton.addEventListener('click', function(){
  sliderBackground.animate([{opacity:0.5},{opacity:1}],{duration:1000, fill:'forwards'});
  counter--;
  if(counter == -1){
    counter = 4
  }
  sliderBackground.style.background = `url(img/sliderImg_${counter}.jpeg) center/cover no-repeat`;
})

//burger_bar
let burgerBox = document.querySelector('.burger_box');
let burgerList = document.querySelector('.burger_list');

burgerBox.addEventListener('click',function(){

let value = burgerList.classList.contains('take_away_burger');

if(value == true){
  burgerList.classList.remove('take_away_burger');
  burgerBox.classList.add('anim');
}else{
  burgerList.classList.add('take_away_burger');
  burgerBox.classList.remove('anim');
}
})
