let i = 0;
let container = document.querySelector('.container');

while (i <= 300) {
    let star = document.createElement('i');
    star.classList.add('star');
    container.appendChild(star);

    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let size = Math.random() * 4;
    let duration = Math.random() * 2;

    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = 2 + duration + 's';
    star.style.animationDelay = duration + 's';

    i++;
}

console.log('im working');