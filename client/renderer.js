//functions used to render the game world

//renders the world
//var matter_list = list of nuggets of info neededd to render all the matter items
function renderAll(matter_list){
  renderBG();//render background
  renderMatter(matter_list);//render all matter
}

//renders the background
function renderBG(){
  colorRect(0,0,cwidth,cheight,'whiteSmoke');
}

//renders all the matter items
//var matter_list = list of nuggets of info neededd to render all the matter items
function renderMatter(matter_list){
  for (var i = 0; i < matter_list.length;i++){//iterate though matter_list
    //draw the matter according to its properties
    colorRect(matter_list[i].x,matter_list[i].y,matter_list[i].s,matter_list[i].s,'red');
  }
}
