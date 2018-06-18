//contains basic canvas info/functions & wind.onload

var cavas, ctx;//ctx is the canvas context
var cwidth,cheight;//the width and height of canvas
var loaded=false;//bool that indicates if the .onload function is completed

window.onload=function(){//When everything is loaded, do this.
  canvas=document.getElementById('gameCanvas');//set canvas to equal document canvas
  ctx=canvas.getContext('2d');//set ctx to equal canvas context
  cwidth =canvas.width;cheight=canvas.height;//assign cwidth and cheight
  colorRect(0,0,cwidth,cheight,'whiteSmoke');//color the background
  loaded=true;//indicate that the onload function is completed
}

//Draws a rectangle
function colorRect(leftX, topY, width, height, drawColor){
    ctx.fillStyle = drawColor;//set the color
    ctx.fillRect(leftX,topY,width,height);//draw the rectangle
}
