const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colorType = document.getElementById('color-type');

btn.addEventListener('click', () => {
    let randomColor;
    if (colorType.value === 'hex') {
        randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
        }
    } else if (colorType.value === 'rgb') {
        randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});