//this is where we define the game deployment
var game_all_sections=[]; //all sections/quarters of the screen
var game_bub_dict={};
var game_all_bub_ids=[];
var game_active_bub_ids=[];
var game_standby_bub_ids=[];
var game_collected_toks=[];
alert("loaded game.js")
function game_start(){
    
    
    hero = new createjs.Bitmap(img_obj_dict["player3"]);
    hw=hero.getBounds().width;
    hh=hero.getBounds().height;
    hero.y=50//(h-hh)*0.5
    hero.x=50//(w-hw)*0.5
    stage.addChild(hero)

    tokens=["I","go","to","school"]
    game_gen_bubs(tokens);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", tick);    
    stage.addEventListener("stagemouseup", mouseup);
    stage.addEventListener("stagemousedown", mousedown);
    stage.update();    
}


    
function mousedown(event) {
    //console.log([event.stageX,event.stageY])
    dx0=event.stageX-hero.x;
    dy0=event.stageY-hero.y;
    var distance = Math.sqrt( dx0*dx0 + dy0*dy0 );
    speed=1
    time_span=distance/speed
    jumping=true;
    stageX=event.stageX;
    stageY=event.stageY;
    createjs.Tween.get(hero).to({x:hero.x+dx0-0.5*hw,y:hero.y+dy0-0.5*hh}, time_span).call(function(){jumping=false})
    
}

function mouseup(event) {
    //console.log([event.stageX,event.stageY])
    jumping=false;
}

function tick(){
    for (var bi in game_active_bub_ids){
        cur_id=game_active_bub_ids[bi]
        var cur_bub=game_bub_dict[cur_id]
        radius=cur_bub.width;
        x_dist=(hero.x+0.5*hw-cur_bub.x)
        y_dist=(hero.y+0.5*hh-cur_bub.y)
        dist=(x_dist*x_dist+y_dist*y_dist)**0.5
        if (dist<radius+hh*0.5) game_hit_bub(cur_bub)

    }

    
    stage.update();
}

//how to control the movement of the hero
function game_move_hero(){
    
}

function game_deploy_q(){
    
}

function game_deploy_txt(){
    
}


function game_add_txt1(){
    
}

function game_add_txt2(){
    
}


function game_deploy_bubbles(){
    
}

//TBD - add enemies to the game
function game_deploy_enemies(){
    //include their animation
}


function game_hit_bub(bub){
    remove(bub.id,game_active_bub_ids)
    stage.removeChild(bub)
    
    
}

function game_correct_bub(){
    
}

function game_wrong_bub(){
    
}

function game_add_score(){
    
}

function game_reduce_health(){
    
}

function game_add_bub(){
    
}

function game_q_complete(){
    
}

function game_lvl_complete(){
    
}

function game_new_q(){
    
}

function game_new_lvl(){
    
}

//When user finishes all the questions on all levels
function game_all_lvl_complete(){
    
}

//When user finishes all free levels or all the levels purchased
function game_av_lvl_complete(){
    
}

//when user finishes everything and wants to keep playing what they did before
function game_keep_playing(){
    
}



function game_gen_bubs(tokens){
    //initial_x=earth.x+0.5*(earth.getBounds().width*earth.scaleX);
    //initial_y=earth.y+0.5*(earth.getBounds().height*earth.scaleY);
    initial_x=-h;
    initial_y=-h;
    max_size=0
    initial_scale=0.05;
    
    for (tk in tokens){
        var cur_tok=tokens[tk]
        var container=draw_bub(cur_tok)
        //if (container.width*2>max_size) max_size=container.width*2

        //container.x=w*Math.random();
        //container.y=h*Math.random();
        container.x=initial_x;
        container.y=initial_x;
        container.name=cur_tok
        container_id=cur_tok+"_"+tk
        container.id=container_id
        container.scaleX=container.scaleY=initial_scale;
        stage.addChild(container);
        game_bub_dict[container_id]=container;
        game_all_bub_ids.push(container_id);
        
    }
    stage.update()
    game_bubs_layout(game_all_bub_ids)

}

function game_bubs_layout(bub_id_list){
    //x0=50;
    //y0=70;
    x_sections=[[0,w*0.5],[w*0.5,w]] //we divide the screen to left and right sections
    y_sections=[[h*0.1,h*0.5],[h*0.5,h*0.9]] //and then to top and bottom sections
    game_all_sections=[]
    for (var xs in x_sections){
        for (ys in y_sections){
            game_all_sections.push([x_sections[xs],y_sections[ys]])
        }
    }
    
    game_all_sections=shuffle(game_all_sections)
    len_sections=Math.min(game_all_sections.length,bub_id_list.length)
    for (var i=0;i<len_sections;i++){
        var cur_bub_id=bub_id_list[i]
        var cur_bub=game_bub_dict[cur_bub_id];
        var cur_sect=game_all_sections[i];
        console.log(cur_sect)
        game_place_bub(cur_bub, cur_sect)
    }

}


function game_place_bub(bub, section){
        radius=bub.width;
        cur_xs=section[0]
        cur_ys=section[1]
        x0=cur_xs[0]+radius+(cur_xs[1]-cur_xs[0]-2*radius)*Math.random()
        y0=cur_ys[0]+radius+(cur_ys[1]-cur_ys[0]-2*radius)*Math.random()
        //console.log([x0,y0])
        //bub.x=w*Math.random();
        //bub.y=h*Math.random();
        bub.scaleX=bub.scaleY=1;
        stage.update()
    
        
        x_dist=(hero.x+0.5*hw-x0)
        y_dist=(hero.y+0.5*hh-y0)
        dist=(x_dist*x_dist+y_dist*y_dist)**0.5
        if (dist<radius+hh*0.5) {
            if (hero.x-cur_xs[0]>cur_xs[1]-hero.x-hw) x0=  cur_xs[0]+radius+(hero.x-cur_xs[0]-2*radius)*Math.random()
            else x0=  hero.x+hw+radius+(cur_xs[0]-hero.x-hw-2*radius)*Math.random()
            if (hero.y-cur_ys[0]>cur_ys[1]-hero.y-hh) y0=  cur_ys[0]+radius+(hero.y-cur_ys[0]-2*radius)*Math.random()
            else y0=  hero.y+hh+radius+(cur_ys[0]-hero.y-hh-2*radius)*Math.random()

        } 
        
        createjs.Tween.get(bub)
            .to({x:x0,y:y0,scaleX:1,scaleY:1}, 500)
            .call(function(){
                game_active_bub_ids.push(this.id);
                console.log(this.id)
                stage.update()
            })
        
    
}

