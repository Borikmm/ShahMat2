
let Gamestart = False;




let DB = new Map();

let per = new Array("drgdg", "rdghdrrt", "ergerg");



// for (let a = 0; a < 32;  a++){
//     DB.set(a, per);
// }


// for (let a = 0; a < 32;  a++){
//     alert(DB.get(a));
// }

function change_player_move(fieldName) {
    var fieldNameElement = document.getElementById('who_move');
    fieldNameElement.textContent = fieldName;
}


function check_have_chakemate(name) {
    var itElement = document.getElementById(name);
    if(itElement != null){
        move(itElement);
    }
}


function move(element){
    if (8 > parseInt(element.id) >= 0){
        move_player1_pawn(element);
    }
}

function move_player1_pawn(element){
    alert("This is pawn player 1")
    if (!Gamestart){
        see_move(element, "pawn_start");
    }
    else{
        see_move(element, "pawn");
    }
}


function see_move(element, type){
    if (type == "pawn_start"){
        element.id
    }
}
