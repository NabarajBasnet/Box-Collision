
const rectOne = document.getElementById('rect1');
const ctx = rectOne.getContext('2d');
ctx.beginPath();
const x = Math.random(5) * 470;
const y = Math.random(5) * 470;
const fixedXvalue = Math.ceil(x);
const fixedYvalue = Math.ceil(y);

ctx.rect(fixedXvalue, fixedYvalue, 30, 30);
ctx.fill();
