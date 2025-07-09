window.onresize = screen;
window.onload = screen;

function screen () {
    myWidth = window.innerWidth;

    document.getElementsById('size').innerHTML = "Width : " + myWidth + "px";
}
