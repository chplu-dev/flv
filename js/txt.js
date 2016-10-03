var txt_is_ready=false;
var txt_files_loaded=[];

var txt_content_dict={}
var txt_files_dict={
    "src":"txt/en.txt",
    "trg":"txt/ar_eg.txt",
    "trg_os":"txt/ar_eg-os.txt",
    "lvl_id":"txt/level_id.txt",
    "prereq":"txt/prereq.txt",
    "qtype":"txt/qtype.txt",
    "image":"txt/image.txt"
}
var txt_files_len=Object.keys(txt_files_dict).length //len(txt_files_dict)

function txt_load(){
    txt_is_ready=false;
    for (cur_txt_id in txt_files_dict){
        //cur_txt_id=txt_files_ids[i]
        cur_url=txt_files_dict[cur_txt_id]
        $.ajax({
        type: 'GET',
        url:cur_url+"?"+cur_txt_id,
        complete: function(result){
            res_txt="";
            cur_id=this.url.split("?")[1]
            if (result.status==200) res_txt=result.responseText;
            txt_files_loaded.push(cur_id);
            res_txt=result.responseText;
            txt_content_dict[cur_id]=res_txt
            if (txt_files_loaded.length==txt_files_len){
                txt_is_ready=true;  //maybe we can proceed to level calculations before that
                lvl_prep(); //we start to prepare the levels based on the text file
                
            }

        }
        });
    }
    
}

