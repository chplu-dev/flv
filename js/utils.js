//This is where we define the utility functions used throughout
//get a DOM obj
function $$(el_id){
	return 	document.getElementById(el_id);
}

//create a new html element with certain type and ID
function create_el(el_type,el_id){
    var el=document.createElement(el_type);
    el.id=el_id;
    return el;
}

//remove a certain html element from the document
function rem_el(el){
    el.parentElement.removeChild(el)
}


//get the length of an array or obj
function len(ob){
    ob_counter=0
    for (a in ob) ob_counter+=1
    return ob_counter;    
}

//Make any object into a string
function str(cur_obj){
	return JSON.stringify(cur_obj)
}


//remove an element from an array
function remove(el,arr){
	var index = arr.indexOf(el);	
	if (index > -1) arr.splice(index, 1);
	return arr
}

//get the time now
function now(){
	t = new Date().getTime()
	return t;
}


//this is to convert a text/string into 2d array/list
function get_list(txt)
    {
    structured_list=[]
    lines=txt.split('\n');
    for (var i=0;i<lines.length;i++)
        {
        cur_line=lines[i];
        if (cur_line.length>1)
            {
            line_split=cur_line.split('\t');
            structured_list.push(line_split)
            }
        }
    return structured_list;
    }

//shuffle an array to ensure randomness in questions
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
return array;
}

//gets the items of a certain column within a multidimensional array
function item_getter(our_list,item_num){
    new_list=[]
    for (var i=0; i<our_list.length; i++){
        new_list.push(our_list[i][item_num])
        }
    return new_list
    }

//get all lower level nodes (without any children) with text - will use it for internationalization
function get_txt_nodes(){
	txt_list=[]
	var all = document.getElementsByTagName('*');
	for (var ai=0;ai<all.length;ai++) {
		node=all[ai]
		if (node.tagName!="SCRIPT" && node.getElementsByTagName('*').length==0) txt_list.push(node.innerHTML)	
		
	}
	return txt_list;

}


function range(n){
    var out=[]
    for (var i=0;i<n;i++) out.push(i);
    return out;
}

//shuffle the numbers for 0 to n so that every 4 consecutive ones
function shuffle4(n){
    var our_range=range(n);
    var shuffled_range=shuffle(our_range);
    var cur_i=0;
    for (var cur_i=0;cur_i<n;cur_i++){
        var cur_slice=shuffled_range.slice(0,cur_i+4)
        if (cur_slice.indexOf(cur_i)>-1) continue;
        else {
            found_i=shuffled_range.indexOf(cur_i)
            shuffled_range.splice(found_i,1)
            shuffled_range.splice(cur_i+3,0,cur_i)
        }
        
    }
    return shuffled_range;
}

function tok_shuffle(toks){
    var shuffled_range=shuffle4(toks.length);
    var shuffled_toks=[];
    for (var ri in shuffled_range){
        var cur_i=shuffled_range[ri];
        shuffled_toks.push(toks[cur_i])
        
    }
    return shuffled_toks;
}