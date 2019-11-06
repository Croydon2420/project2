function saveitem(event, mainitem) {
    switch (event.which) {
        case 13: // enter key pushed
            mylists.add(mainitem);
            $(".todoinput").val("");
            printPage();
            break;
    }
}

function addSubList(event, itemname, listnum) {
    switch (event.which) {
        case 13: // enter key pushed
            $(".todoinput").val("");
            mylists.collection[listnum].add(itemname);
            printPage();
            break;
    }
}

function editmem(event, listnum, memnum, name) {
    switch (event.which) {
        case 13:
            mylists.collection[listnum].collection[memnum].name = name;
            printPage();
    }
}

function printPage() {
    $(".listbox").html("");
    for(let i = 0; i < mylists.collection.length; i++){
        let thelist = mylists.collection[i];
        let listitems = "";

        for(let g = 0; g < thelist.collection.length; g++){
            let subListItem = thelist.collection[g].name;                                   // use for delete with a click on icon
            listitems += `<div class="sublistitem" contenteditable="true" onkeyup="editmem(${i}, ${g}, this.value)"><i class="fas fa-trash" onclick="delitem(this)"></i>${subListItem}</div>`
        }

        $(".listbox").append(`<div>
                                    <div contenteditable="true">
                                        <i class="fas fa-trash" onclick="delitem(this)"></i>
                                        <span>${thelist.name}</span>
                                        <input type="text" class="listinput" onkeyup="addSubList(event, this.value, ${i})">
                                    </div>
                                    <div class="items">${listitems}</div>
                              </div>`);
    }
}



function delitem(listnum, itemnum, el) {
    for(let l = 0; l < mylists.collection.length; l++){
        let subList = mylists.collection[l]; // reference to a list object
        if(l === listnum){// list we want to delete from
            mylists.collection[l].delete(itemnum);

            $(el).parent().fadeOut();

        }
    }
}


