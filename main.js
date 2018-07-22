var sketchBook = document.getElementById('sketchBook')
var context = sketchBook.getContext('2d');


context.fillStyle = 'rgb(200,0,0)';
context.fillRect(10, 10, 55, 50);


function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

var mouseDown = false
var firstPoint = {
    x: undefined,
    y: undefined
}
document.onmousedown = function (e) {
    mouseDown = true
    var x = e.clientX
    var y = e.clientY
    firstPoint.x = x
    firstPoint.y = y
    console.log('down');
    console.log(firstPoint);
}

document.onmousemove = function (e) {
    var lastPoint = {
        x: undefined,
        y: undefined
    }
    var x = e.clientX
    var y = e.clientY
    if (mouseDown) {
        lastPoint.x = x
        lastPoint.y = y
        drawLine(firstPoint.x, firstPoint.y, lastPoint.x, lastPoint.y)
        firstPoint = lastPoint
    }
}

document.onmouseup = function (e) {
    mouseDown = false
    console.log('up');
    console.log(mouseDown);
}