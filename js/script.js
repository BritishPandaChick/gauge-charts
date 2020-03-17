window.onload = function(){
    //canvas initialization 
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //dimensions 
    var W = canvas.width; 
    var H = canvas.height;  

    //gauge will be a simple arc 
    //lets draw a 200 degree arc, we need to specify degrees in radians 
    var degrees = 200;
    //Angle in radians = angle in degrees * PI / 180 
    var radians = degrees * this.Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = "lightgreen";
    ctx.arc(x, y, radius, 0, radians, false);
    ctx.stroke();
}