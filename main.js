const squerEles = [
    document.getElementById('squer'),
    document.getElementById('squer1'),
    document.getElementById('squer2'),
    document.getElementById('squer3')
];


function squerMove(squerEle) {
    squerEle.style.left = Math.floor(Math.random() * 100) + 'px';
    squerEle.style.right = Math.floor(Math.random() * 100) + 'px';
    squerEle.style.top = Math.floor(Math.random() * 100) + 'px';
    squerEle.style.bottom = Math.floor(Math.random() * 100) + 'px';
    squerEle.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    squerEle.style.width = Math.floor(Math.random() * 200) + 'px';
    squerEle.style.height = Math.floor(Math.random() *200) + 'px';
    squerEle.style.transformY = Math.floor(Math.random() * -100) + 'px';
    squerEle.style.transformX = Math.floor(Math.random() * 100) + 'px';}
setInterval(() => {
    squerEles.forEach(squerMove);
}

, 2000);

// make it more elegant ☺️