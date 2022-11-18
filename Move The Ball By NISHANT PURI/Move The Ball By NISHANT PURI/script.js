let circle = document.querySelector('.circle');
let moveBy = 10;
let left_allign =  Math.random()*1500;
let top_allign =  Math.random()*700;
 
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = left_allign + 'px';
    circle.style.top = top_allign +'px';
});
 
 
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'a':
            if(parseInt(circle.style.left)>8)
            {
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'A':
            if(parseInt(circle.style.left)>8)
            {
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'd':
            if(parseInt(circle.style.left)<1478)
            {
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'D':
            if(parseInt(circle.style.left)<1478)
            {
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'w':
            if(parseInt(circle.style.top)>6.3)
            {
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'W':
            if(parseInt(circle.style.top)>6.3)
            {
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 's':
            if(parseInt(circle.style.top)<693)
            {
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'S':
            if(parseInt(circle.style.top)<693)
            {
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
    }
});