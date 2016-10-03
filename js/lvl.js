//This is where we define the levels
var lvl_prep_is_ready=false;
var lvl_dict={};
var lvl_names=[];

function lvl_prep(){
    lvl_prep_is_ready=false
    //get the level names
    //get the level dict, showing from which line to which
    //identify the prerequisites
    console.log("preparing the levels")
    lvl_prep_is_ready=true;
    init_check_loading();
}