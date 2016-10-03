//thie is where we load images
var img_is_ready=false;

var img_loaded_list=[];

var img_dict={
    "player1":"img/p1_stand.png",
    "player2":"img/p2_stand.png",
    "earth":"img/earth.png",
    "champolu_logo":"img/champolu_logo.png",
    "player3":"img/p3_stand.png"
}
var img_dict_len=len(img_dict)
var img_obj_dict={}

//this is where we load the images from the image dict
function img_load(){
    for (cur_img_id in img_dict){
        img1=create_el("img",cur_img_id)
        img1.onload=img_add_id
        img1.src=img_dict[cur_img_id]
        img1.hidden=true;
        document.body.appendChild(img1)   
        img_obj_dict[cur_img_id]=img1
    }        
}


function img_add_id(obj){
    //console.log(obj.target.id)
    img_loaded_list.push(obj.target.id)
    if (img_loaded_list.length==img_dict_len){
        console.log("images loaded")
        img_is_ready=true;
        init_check_loading()
    }
    
}