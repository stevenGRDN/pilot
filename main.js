let stylesheet = document.querySelector('style');
let easing = `ease`;
let eZ2 = `cubic-bezier(0.1, 0, 0.1, 1)`;
let firstDelay = 1;
let secondDelay = 2;
let thirdDelay = 1;

console.log(stylesheet);

let bodyElem = document.querySelector('.top-container');
let letterTop = document.querySelector('.letter-top');
let letterBot = document.querySelector('.letter-bot');
let topPath = document.querySelector('.top-path');
let letters = document.querySelector('.letters');
let extraLetters = document.querySelectorAll('.letter-extra');

bodyElem.style.animation = `bodyAnim 1s ${eZ2} ${firstDelay}s both`;
letterTop.style.animation = `letterTop1 1s ${easing} ${firstDelay + secondDelay}s forwards, letterTop2 1s ${easing} ${firstDelay + secondDelay + thirdDelay}s forwards`;
letterBot.style.animation = `letterBot1 1s ${easing} ${firstDelay + secondDelay}s forwards, letterBot2 1s ${easing} ${firstDelay + secondDelay + thirdDelay}s forwards`;
topPath.style.animation = `topPath1 1s ${easing} ${firstDelay + secondDelay - 0.03}s forwards, topPath2 0.2s ${easing} ${firstDelay + secondDelay + thirdDelay}s forwards`;
letters.style.animation = `letters 1s ${easing} ${firstDelay + secondDelay + thirdDelay}s forwards`;

let extraDelay = 0;
let animName = '';
extraLetters.forEach(letters =>{
  if(letters.classList[2] == 'g-2') {extraDelay = 0.1; animName = 'groups-2'};
  if(letters.classList[2] == 'g-3') {extraDelay = 0.2; animName = 'groups-3'};
  if(letters.classList[2] == 'g-4') {extraDelay = 0.25; animName = 'groups-4'};
  if(letters.classList[2] == 'g-5') {extraDelay = 0.275; animName = 'groups-5'};
  letters.style.animation = `${animName} 1s ${easing} ${firstDelay + secondDelay + thirdDelay + 0.5 + extraDelay}s both`;
})

// P1 - 627 DashArray 627 - 1254
// ALWAYS ADD 1 so it's hidden at the start

// element dasharray dashoffsetstart dashoffsetend animduration animdelay ease

function dashOffset(elem, dasharray, dashStart, dashEnd, animDur, animDel, animEase){
  let newElement = document.querySelector(`.${elem}`);
  newElement.style.strokeDasharray = dasharray;
  
  stylesheet.innerHTML+= `@keyframes ${elem}-Anim{0%{stroke-dashoffset:${dashStart}}100%{stroke-dashoffset:${dashEnd}}}`;
  console.log(stylesheet); 
  newElement.style.animation = `${elem}-Anim ${animDur}s ${animEase} ${animDel}s both`;
}

//          element    array start end dur delay ease
dashOffset('line-p1-1', 627, 627, 1254, 1.5, 1.5, easing);

dashOffset('line-h1-1', 376, 376, 0, 0.8, 1.5, easing);
dashOffset('line-h1-2', 126, 126, 0, 1, 1.9, easing);
dashOffset('line-h1-3', 127, 127, 0, 1, 2, easing);

dashOffset('line-i2-1', 251, 251, 0, 1, 5, easing);
dashOffset('line-i2-2', 378, 378, 0, 0.8, 5.35, easing);
dashOffset('line-i2-3', 126, 126, 253, 0.6, 5.65, easing);

dashOffset('line-l3-1', 431, 431, 0, 1, 5.2, easing);

dashOffset('line-o4-1', 753, 753, 0, 1, 5.4, easing);

dashOffset('line-t5-1', 378, 378, 757, 1, 5.5, easing);
dashOffset('line-t5-2', 126, 126, 0, 0.8, 5.9, easing);

dashOffset('line-o2-1', 753, 753, 0, 1, 5.7, easing);

dashOffset('line-u3-1', 557, 557, 0, 1, 5.9, easing);

dashOffset('line-s4-1', 627, 627, 0, 1, 6.1, easing);

dashOffset('line-e5-1', 376, 376, 0, 1, 6.3, easing);
dashOffset('line-e5-2', 252, 252, 504, 0.8, 6.7, easing);


// dashOffset('line-p1-1', 627, 627, 1254, 1.5, 1.5, easing);

// dashOffset('line-h1-1', 376, 376, 0, 0.8, 1.5, easing);
// dashOffset('line-h1-2', 126, 126, 0, 1, 1.9, easing);
// dashOffset('line-h1-3', 127, 127, 0, 1, 2, easing);

// dashOffset('line-i2-1', 251, 251, 0, 1, 5, easing);
// dashOffset('line-i2-2', 378, 378, 0, 0.8, 5.35, easing);
// dashOffset('line-i2-3', 126, 126, 253, 0.6, 5.65, easing);

// dashOffset('line-l3-1', 431, 431, 0, 1, 5.2, easing);

// dashOffset('line-o4-1', 753, 753, 0, 1, 5.4, easing);

// dashOffset('line-t5-1', 378, 378, 757, 1, 5.5, easing);
// dashOffset('line-t5-2', 126, 126, 0, 0.8, 5.9, easing);

// dashOffset('line-o2-1', 753, 753, 0, 1, 6, easing);

// dashOffset('line-u3-1', 557, 557, 0, 1, 6.2, easing);

// dashOffset('line-s4-1', 627, 627, 0, 1, 6.4, easing);

// dashOffset('line-e5-1', 376, 376, 0, 1, 6.6, easing);
// dashOffset('line-e5-2', 252, 252, 504, 0.8, 7, easing);


// dashOffset('line-p1-1', 627, 627, 1254, 1.5, 1.5, easing);

// dashOffset('line-h1-1', 376, 376, 0, 0.8, 1.5, easing);
// dashOffset('line-h1-2', 126, 126, 0, 1, 1.9, easing);
// dashOffset('line-h1-3', 127, 127, 0, 1, 2, easing);

// dashOffset('line-i2-1', 251, 251, 0, 1, 5, easing);
// dashOffset('line-i2-2', 378, 378, 0, 1, 5, easing);
// dashOffset('line-i2-3', 126, 126, 253, 1, 5, easing);

// dashOffset('line-l3-1', 431, 431, 0, 1, 6, easing);

// dashOffset('line-o4-1', 753, 753, 0, 1, 6, easing);

// dashOffset('line-t5-1', 378, 378, 757, 1, 6, easing);
// dashOffset('line-t5-2', 126, 126, 0, 1, 6, easing);

// dashOffset('line-o2-1', 753, 753, 0, 1, 6, easing);

// dashOffset('line-u3-1', 557, 557, 0, 1, 6, easing);

// dashOffset('line-s4-1', 627, 627, 0, 1, 6, easing);

// dashOffset('line-e5-1', 376, 376, 0, 1, 6, easing);
// dashOffset('line-e5-2', 252, 252, 504, 1, 6, easing);