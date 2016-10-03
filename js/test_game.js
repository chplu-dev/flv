//this is where we define the game deployment
var game_all_sections=[]; //all sections/quarters of the screen
var game_bub_dict={};
var game_all_bub_ids=[];
var game_active_bub_ids=[];
var game_standby_bub_ids=[];
var game_collected_toks=[];


alert("loaded game.js")
function game_start(){
    alert("Game starting!")
    
    hero = new createjs.Bitmap(img_obj_dict["player3"]);
    hw=hero.getBounds().width;
    hh=hero.getBounds().height;
    hero.y=50//(h-hh)*0.5
    hero.x=50//(w-hw)*0.5
    stage.addChild(hero)
    /*

    tokens=["I","go","to","school"]
    game_gen_bubs(tokens);

    */
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", tick);    
    stage.addEventListener("stagemouseup", mouseup);
    //stage.addEventListener("stagemousedown", mousedown);

      
}

function mouseup(event){
	
    dx0=event.stageX-hero.x;
    dy0=event.stageY-hero.y;
    //distance=(dx0**2+dy0**2)**0.5;
    var distance = Math.sqrt( dx0*dx0 + dy0*dy0 );
    speed=1
    time_span=distance/speed
    jumping=true;
    //stageX=event.stageX;
    //stageY=event.stageY;
    createjs.Tween.get(hero).to({x:hero.x+dx0-0.5*hw,y:hero.y+dy0-0.5*hh}, time_span).call(function(){jumping=false})

    
    //alert([event.stageX,event.stageY])
    /*
    
    
    

    */

}

function tick(){
	stage.update();  
}

