window.onload = function(){
    //canvas initialization 
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //dimensions 
    var W = canvas.width; 
    var H = canvas.height;
    //Variables
    var degrees = 0;
    var new_degrees = 0;
    var difference = 0;
    var color = "lightgreen"; //green looks better
    var bgcolor = "#222";
    var text;
    var animation_loop, redraw_loop;

    function init(){
        //Clear the canvas everytime a chart is drawn 
        ctx.clearRect(0, 0, W, H);

        //Background 260 degree arc 
        ctx.beginPath();
        ctx.strokeStyle = bgcolor;
        ctx.lineWidth = 30;
        ctx.arc(W/2, H/2, 100, 0, Math.PI*2, false); //you can see the arc now 
        ctx.stroke();

        //gauge will be a simple arc 
        //lets draw a 200 degree arc, we need to specify degrees in radians 
        var degrees = 200;
        //Angle in radians = angle in degrees * PI / 180 
        var radians = degrees * this.Math.PI / 180;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 30;
        //Arc starts from the rightmost end. If we deduct 90 degees from the angles 
        //the arc will start from the topmost end 
        ctx.arc(W/2, H/2, 100, 0 - 90*this.Math.PI/180, radians - 90 * Math.PI/180, false); //you can see the arc now 
        //you can see the arc now 
        ctx.stroke();

        //Lets add the text
        ctx.fillStyle = color;
        ctx.font = "50px arial"; 
        text = Math.floor(degrees/360*100) + "%";
        //Let's center the text 
        //deducting half of text width from position x 
        text_width = ctx.measureText(text).width;
        //adding manual value to position y
        //be measured easily. There are hacks but we will keep it manual for now.
        ctx.fillText(text, W/2 - text_width/2, H/2);
    }
    
    function draw(){
        //Cancel any movement animation if a new chart is requested
        if(typeof animation_loop != undefined) {
            clearInterval(animation_loop);
        }

        //random degree from 0 to 360
        new_degrees = Math.round(Math.random()*360);
        difference = new_degrees - degrees;
        //This will animate the gauge to new positions 
        //This animation will take 1 second 
        //time for each frame 1 sec / difference in degrees
        animation_loop = setInterval(animate_to, 1000/difference);
    }

    //function to make the chart move to new degrees 
    function animate_to(){
        //clear animation loop if degrees reaches to new_degrees
        if(degrees == new_degrees){
            clearInterval(animation_loop);
        }

        if(degrees < new_degrees) {
            degrees++;
        } else {
            degrees--;
        }
        init();
    }

    //Lets add some animation for un
    draw();
    redraw_loop = setInterval(draw, 2000); //Draw a new chart every 2 seconds 


}