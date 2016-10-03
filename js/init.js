//Here we define all the initialization functions

//Set the needed OS variables
var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1; //test whether the code is running on a browser or in an app

var isAndroid=false;
if (window.location.pathname.indexOf("android_asset") > -1) isAndroid=true;

var lang1, lang2;
var w, h;
var all_is_ready=false;
var device_is_ready=false;
var canvas, stage;
var cur_view="main_menu";
var hero, hh, hw;

//This is the main function
function init() {
    console.log("init");
    init_canvas(); //define the canvas
    init_stage(); //define the stage
    init_device(); //initialize the device for apps
    img_load(); //load the needed images
    txt_load(); //load the needed text files
    intro(); //launch the intro, when it is finished, draw the menu

}

//depending on whether we're an app or not, we check if device is ready
function init_device() {
    if (app) document.addEventListener("deviceready",init_onDeviceReady, false);
	else init_onDeviceReady()    
}

function init_onDeviceReady(){
    device_is_ready=true;
    init_check_loading();
}

//This is where we define the size and properties of the canvas
function init_canvas(){
    canvas=document.getElementById("myCanvas")
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    w=canvas.width;
    h=canvas.height;

    //canvas.style.height=h
    //canvas.style.width=w;    
    canvas.style.background = 'LightSkyBlue';
    //canvas_is_ready=true;
}

//this is where we define the stage, add the touch and event listeners
function init_stage(){
    stage = new createjs.Stage(canvas); 
	createjs.Touch.enable(stage);
	stage.snapToPixelEnabled= true;   
    
}

function init_check_loading(){
    if (lvl_prep_is_ready && txt_is_ready && device_is_ready && img_is_ready) {
        all_is_ready=true;
        alert("finished loading"); //should be just start game
        try {
            game_start();
        }
        catch(err) {
            alert(err.message);
        }

        
        
    } 
}

//this is where we define the default language from the URL or index.html
function init_lang() {
	if (location.search.length>1) lang2=location.search.slice(1)
    console.log(lang2);
}
