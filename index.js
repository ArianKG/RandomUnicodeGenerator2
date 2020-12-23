const p = document.querySelector('.p');
p.id = document.querySelector('p');

setInterval(
function randomUnicode() {
    var txt = String.fromCharCode(Math.floor(Math.random() * 65535));
    p.innerHTML = txt;
}, 1000)
