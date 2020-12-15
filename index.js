setInterval(
function random_unicode() {
    var txt = String.fromCharCode(Math.floor(Math.random() * 65535));
    p.innerHTML = txt;
}, 1000)
