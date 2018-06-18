/*this need alot work*/

exports.Matter=function(){
  this.cord=new exports.Coordinate();
  this.push=new exports.Push();
  this.size = 0.0;
  this.weight = 0.0;

  this.update=function(){
    //add weight to push
    this.push.y+=.7;
    bottom = 380;


    //update push to cordinate
    this.cord.x+=this.push.x;
    this.cord.y+=this.push.y;

    if (this.cord.y>=bottom)
    this.cord.y=bottom;
  }
}

exports.Push=function(){
  this.x=0.0;
  this.y=0.0;
  this.set=function(newx,newy){
    this.x=newx;
    this.y=newy;
  }
}

exports.Coordinate=function(){
  this.x=0.0;
  this.y=0.0;
  this.set=function(newx, newy){
    this.x=newx;
    this.y=newy;
  }
  exports.Coordinate.distance=function(e){
    var a=Math.abs(exports.Coordinate.x-e.x)
    var b=Math.abs(exports.Coordinate.y-e.y)
    return Math.sqrt((a*a)+(b*b));
  }
}
