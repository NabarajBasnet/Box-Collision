
const rectOne = document.getElementById('rect1');
const ctx = rectOne.getContext('2d');
const arrOfColors = ['black', 'white', 'green', 'yellow', 'pink', 'blue'];
const randomIndexOfCarr = Math.random(arrOfColors.length) * arrOfColors.length;
const fixedRandomIndexOfCArr = Math.ceil(randomIndexOfCarr);
ctx.fillStyle = arrOfColors[fixedRandomIndexOfCArr];

ctx.beginPath();
const x = Math.random(5) * 470;
const y = Math.random(5) * 470;
const fixedXvalue = Math.ceil(x);
const fixedYvalue = Math.ceil(y);

ctx.rect(fixedXvalue, fixedYvalue, 30, 30);
ctx.fill();
