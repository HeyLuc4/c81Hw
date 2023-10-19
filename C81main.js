canvas = document.getElementById("meuCanvas");
canvasBizzaro = canvas.getContext("2d");

canvasBizzaro.beginPath();
canvasBizzaro.strokeStyle = "grey";
canvasBizzaro.lineWidth = 3;
canvasBizzaro.rect(150,130,500,200);
canvasBizzaro.stroke();

canvasBizzaro.beginPath();
canvasBizzaro.strokeStyle = "blue";
canvasBizzaro.lineWidth = 3;
canvasBizzaro.arc(300,200,40,0,2*Math.PI);
canvasBizzaro.stroke();

canvasBizzaro.beginPath();
canvasBizzaro.strokeStyle = "black";
canvasBizzaro.lineWidth = 3;
canvasBizzaro.arc(400,200,40,0,2*Math.PI);
canvasBizzaro.stroke();

canvasBizzaro.beginPath();
canvasBizzaro.strokeStyle = "red";
canvasBizzaro.lineWidth = 3;
canvasBizzaro.arc(500,200,40,0,2*Math.PI);
canvasBizzaro.stroke();

canvasBizzaro.beginPath();
canvasBizzaro.strokeStyle = "yellow";
canvasBizzaro.lineWidth = 3;
canvasBizzaro.arc(350,250,40,0,2*Math.PI);
canvasBizzaro.stroke();

canvasBizzaro.beginPath();
canvasBizzaro.strokeStyle = "green";
canvasBizzaro.lineWidth = 3;
canvasBizzaro.arc(450,250,40,0,2*Math.PI);
canvasBizzaro.stroke();
