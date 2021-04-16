var beaver = document.createElement('img')
beaver.src = 'img/beaver.png'
beaver.classList.add = 'beaver'
var num = 0;
var txt = document.querySelector('.score')
var second = document.querySelector('.sec')
var score = 0;
var speed = 1500;
var spawn = 700;
beaver.style.width = '200px'
beaver.style.position = 'absolute'
beaver.style.marginTop = '2%'
beaver.style.transition = '0.5s'
txt.innerHTML = score
var sec = 30;
var int2;
second.innerHTML = 'You have ' + sec + ' seconds left'
var oval2 = document.querySelector('.oval2');
var oval3 = document.querySelector('.oval3');

oval2.style.marginLeft = screen.width*0.245+'px'
oval3.style.marginRight = screen.width*0.245-204+'px'

var int1 = setInterval(() => {
    document.body.appendChild(beaver)
    var randx = Math.floor(Math.random() * 3) + 1;
    beaver.style.marginTop = '2%'
    if (randx == 1) {
        beaver.style.marginLeft = screen.width*0.245+'px'
        setTimeout(() => {
            beaver.style.marginTop = '-7%'
        }, 100);
    }
    if (randx == 2) {
        beaver.style.marginLeft = '0%'
        setTimeout(() => {
            beaver.style.marginTop = '-7%'
        }, 100);
    }
    if (randx == 3) {
        beaver.style.marginLeft = -screen.width*0.245+'px'
        setTimeout(() => {
            beaver.style.marginTop = '-7%'
        }, 100);
    }
}, speed);

beaver.addEventListener('click', function () {
    num++;
    beaver.style.marginTop = '7%'
    if (num == 1) {
        setTimeout(() => {
            document.body.removeChild(beaver)
        }, spawn);
    }
    score++;
    txt.innerHTML = score
    if (score == 10) {
        speed = 1000;
        spawn = 300;
        beaver.style.transition = '0.3s'
        clearInterval(int1)
        int2 = setInterval(() => {
            document.body.appendChild(beaver)
            var randx = Math.floor(Math.random() * 3) + 1;
            beaver.style.marginTop = '2%'
            if (randx == 1) {
                beaver.style.marginLeft = '-24.5%'
                setTimeout(() => {
                    beaver.style.marginTop = '-7%'
                }, 80);
            }
            if (randx == 2) {
                beaver.style.marginLeft = '0%'
                setTimeout(() => {
                    beaver.style.marginTop = '-7%'
                }, 80);
            }
            if (randx == 3) {
                beaver.style.marginLeft = '24.5%'
                setTimeout(() => {
                    beaver.style.marginTop = '-7%'
                }, 80);
            }
            console.log(speed);
        }, speed);
    }
})

var int3 = setInterval(() => {
    sec--;
    second.innerHTML = 'You have ' + sec + ' seconds left'
    if (sec == 0 && speed == 1500) {
        clearInterval(int1)
        clearInterval(int3)
        document.body.removeChild(beaver)
    }
    if (sec == 0) {
        clearInterval(int2)
        clearInterval(int3)
        document.body.removeChild(beaver)
    }
}, 1000);