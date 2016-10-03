//this where we define how we work with html/dom

function html_table(arr1){
    var table = document.createElement("table");
    table.border="1"
    for (var i=0;i<arr1.length;i++){
        row = table.insertRow(0);
        row_items=arr1[i];
        for (var j=0;j<row_items.length;j++){
            cell = row.insertCell(j);
            cell.innerHTML=row_items[j];
        }
    }
    return table;
}

