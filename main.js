squerEle = document.getElementById('squer');


setInterval(() => {
    squerEle.style.left = Math.floor(Math.random() * 100) + 'px';
    squerEle.style.top = Math.floor(Math.random() * 100) + 'px';
    squerEle.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    squerEle.style.width = Math.floor(Math.random() * 100) + 'px';
    squerEle.style.height = Math.floor(Math.random() * 100) + 'px';
    

}

, 1000);
