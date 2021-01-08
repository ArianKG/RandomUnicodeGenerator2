const p = document.querySelector('.p');

setInterval(
function randomUnicode() {
    var unicode = String.fromCharCode(Math.floor(Math.random() * 65535));
    p.innerHTML = unicode;
}, 1000)
