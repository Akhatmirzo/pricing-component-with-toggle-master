const modeWrap = document.querySelector('.mode-wrap');
const leftText = document.querySelector('.left-text');
const rightText = document.querySelector('.right-text');
const modeCircle = document.querySelector('.mode-circle');
const priceValues = document.querySelectorAll('.priceValue');
let isPlan = false;
rightText.style.color = 'hsl(232, 13%, 33%)';

let planArr = {
    monthly: [19.99, 24.99, 39.99,],
    annualy: [ 199.99, 249.99, 399.99 ]
}

for (let i = 0; i < priceValues.length; i++) {
    priceValues[i].innerHTML = planArr.monthly[i];
}

modeWrap.addEventListener('click', function () {
    modeCircle.classList.toggle('mode-floating');

    setTimeout(() => {
        if (modeCircle.classList.contains('mode-floating')) {
            leftText.style.color = 'hsl(232, 13%, 33%)';
            rightText.style.color = 'hsl(234, 14%, 74%)';
            isPlan = true;
            for (let i = 0; i < priceValues.length; i++) {
                priceValues[i].innerHTML = planArr.annualy[i];
            }
        } else {
            leftText.style.color = 'hsl(234, 14%, 74%)';
            rightText.style.color = 'hsl(232, 13%, 33%)';
            isPlan = false;
            for (let i = 0; i < priceValues.length; i++) {
                priceValues[i].innerHTML = planArr.monthly[i];
            }
        }
        console.log(isPlan);
    }, 300);
})


