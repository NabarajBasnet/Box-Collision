const boxOne = () => {

    const rectOne = document.getElementById('rect');
    const ctx = rectOne.getContext('2d');
    const arrOfColors = ["blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "red", "white"];
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
};

const boxTwo = () => {
    const rectTwo = document.getElementById('rect');
    const ctx2 = rectTwo.getContext('2d');
    const arrOfColors = ["blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "red", "white"];
    const randomIndex = Math.random(arrOfColors.length) * arrOfColors.length
    const fixedRandomIndex = Math.ceil(randomIndex);
    ctx2.fillStyle = arrOfColors.reverse()[fixedRandomIndex];

    ctx2.beginPath();
    const x = Math.random(5) * 470;
    const y = Math.random(5) * 470;
    const fixedX = Math.ceil(x);
    const fixedY = Math.ceil(y);

    ctx2.rect(fixedX, fixedY, 30, 30);
    ctx2.fill();
};

const boxThree = () => {
    const rectTwo = document.getElementById('rect');
    const ctx3 = rectTwo.getContext('2d');
    const arrOfColors = ["blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "red", "white"];
    const randomIndex = Math.random(arrOfColors.length) * arrOfColors.length
    const fixedRandomIndex = Math.ceil(randomIndex);
    ctx3.fillStyle = arrOfColors.reverse()[fixedRandomIndex];

    ctx3.beginPath();
    const x = Math.random(5) * 480;
    const y = Math.random(5) * 480;
    const fixedX = Math.ceil(x);
    const fixedY = Math.ceil(y);

    ctx3.rect(fixedX, fixedY, 20, 20);
    ctx3.fill();
};

boxOne();
boxTwo();
boxThree();
