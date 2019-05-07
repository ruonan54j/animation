const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var x = 100;
var y = 100;
var action = "Idle";
// Load an image of intrinsic size 300x227 in CSS pixels
var runi = 1;
var changedir = true;
function drawImageActualSize() {
  // Use the intrinsic size of image in CSS pixels for the canvas element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // Will draw the image as 300x227, ignoring the custom size of 60x45
  // given in the constructor
  //ctx.drawImage(this, 0, 0);

  // To use the custom size we'll have to specify the scale parameters 
  // using the element's width and height properties - lets draw one 
  // on top in the corner:


  
  ctx.drawImage(this, x, y, this.width, this.height);
  
}

var i = 0;
var maxi = 0; 
setInterval(function(){
    
    if(action=="Idle"){
        maxi = 10;
    }
    if(action=="Jump"){
        maxi = 8;
        if (i == maxi){ 
            i = 0;
            action="Idle"; 
            y+=50;
        }
    }
    if(action == "Run"){
        maxi = 8;
    }
    if (i >= maxi){ i = 0}
    i++;
    const image = new Image(200, 170); // Using optional size for image
    image.src = './png/dog/'+action+' ('+i+').png';
    image.onload= drawImageActualSize; // Draw when image has loaded
//    drawImageActualSize();

},
100);


document.addEventListener("keyup", function(event) {
    if(action=="Run"){
    action = "Idle";
    }
});
document.addEventListener("keydown", function(event) {
    
    if(event.which==37){
        console.log(y);
        x-=10;
        action = "Run";
    }

    if(event.which==39){
        console.log(y);
        x+=10;
        action = "Run";
    }

    if(event.which==38){
        console.log(y);
        y-=50;
        action = "Jump";
    }

    if(event.which==40){
        console.log(y);
        y+=10;
        action = "Run";
    }

    if([37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
  });