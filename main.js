function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "" ;
}

//--------------------------------------------------------------------------------------------------------------------------------------------

function draw(){
 image(video, 0, 0, 640, 480);

 fill((255,0,0));
  stroke(0, 128, 0);
  circle(0, 0, 100);

  line(0, 0, 640, 0);
  stroke(126);
  strokeWeight(20);
  
  fill((255,0,0));
  stroke(0, 128, 0);
  circle(640, 480, 100);

  line(0, 0, 0, 480);
  stroke(126);
  strokeWeight(20)

  fill((255,0,0));
  stroke(0, 128, 0);
  circle(640, 0, 100);

  line(0, 480, 0, 0);
  stroke(126);
  strokeWeight(20)

  fill((255,0,0));
  stroke(0, 128, 0);
  circle(0, 480, 100);
  
    tint(tint_color);

}

//--------------------------------------------------------------------------------------------------------------------------------------------

function take_snapshot(){
    save('student_name.png');

}

//--------------------------------------------------------------------------------------------------------------------------------------------

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;

}

