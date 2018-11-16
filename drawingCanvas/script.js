var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");

pen.moveTo(0,0);
pen.lineTo(300, 150);
pen.stroke();

pen.font = "30px Arial";
pen.fillText("I'm already Tracer.", 10, 50);

pen.beginPath();
pen.arc(142.5, 75, 60, 0, 3 * Math.PI);
pen.stroke();