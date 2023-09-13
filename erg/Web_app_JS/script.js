
let Gamestart = false;




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
    if(itElement.innerHTML != null){
        move(itElement);
    }
}


function move(element){
    var idd = element.childNodes[1].id;
    if ( idd < 9 && idd > 0){
        move_player1_pawn(element);
    }
    if (idd == 9 || idd == 10){
        move_player1_rook(element);
    }

}

function move_player1_pawn(element){

    console.log("This is pawn player 1");
    console.log(element.id);
    if (!Gamestart){
        see_move(element, "pawn_start", 1);
    }
    else{
        see_move(element, "pawn", 1);
    }
}


function see_move(element, type, player){
    if (type == "pawn_start"){
        try{
            document.querySelector('#${element.id-1}').style.color = "red";
            document.querySelector('#${element.id-2}').style.color = "red";
        }
        catch{
            console.log("error")
        }
    }
}


function move_player1_rook(element){
    console.log("This is rook player 1");
    see_move(element, "rook", 1);
}