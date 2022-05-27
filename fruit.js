img ="";
objects = [];
status = "";

function preload()
{
    img = loadImage("fruit_basket.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status = "true";
    objectDetector.detect(img, gotresult);
}

function gotresult(error, results)
{
   if(error)
   {
     console.log(error);
   }
   console.log(results);
   objects = results;
}

function draw()
{
  image(img,0,0,640,420);

  if(status != "")
  {
    for(step = 1; step = objects.length; step++)
    {
      document.getElementById("status").innerHTML = "status:objectdetected";

      fill("#ff0000");
      percent = floor(objects[step].confidence*100);
      Text(objects[step].label+' '+percent+" %",obejects[step].x + 15,obejects[step].y + 15);
      noFill();
      stroke("#ff0000");
      rect(obejects[step].x,obejects[step].y,obejects[step].width,objects[step].height);
    }
  }
}