//this is where we define the functions we use to draw easelJS objects
var draw_min_bub_size=50;
function draw_bub(txt){
    min_size=draw_min_bub_size;
    label = new createjs.Text(txt, "bold 32px Arial", "#FFFFFF");
    label.textAlign = "center";
    label.y = -7;
    label_w=label.getMeasuredWidth();
    size=Math.max(min_size,label_w*0.55)
    
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, size);
    var container = new createjs.Container();
    container.width=size;
    container.addChild(circle, label);
    return container;
}
