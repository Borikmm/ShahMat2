
let Gamestart = false;




let DB = new Map();

let per = new Array("drgdg", "rdghdrrt", "ergerg");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];




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
    if (idd >= 9 && idd <= 16){
        move_player1_rook(element);
    }

}

function move_player1_pawn(element){

    console.log("This is pawn player 1 ");
    
    if (!Gamestart){
        see_move(element, "pawn_start", 1);
    }
    else{
        see_move(element, "pawn", 1);
    }
}


function see_move(element, type, player){
    var test = Number(element.id[1]);
    var test1 = element.id[0];
    console.log("#" + (test - 1) + test1);

    if (type == "pawn_start"){
        try{
            document.getElementById(test1 + (test - 1)).style.backgroundColor = "green";
            document.getElementById(test1 + (test - 2)).style.backgroundColor = "green";
        }
        catch{
            console.log("error")
        }
    }
}


function move_player1_rook(element){
    var test = Number(element.id[1]);
    var test1 = element.id[0];
    var index_letter = letters.indexOf(test1);
    switch (element.id){
        case "B8":
            var a = letters[index_letter + 1] + (test - 2);
            var b = letters[index_letter - 1] + (test - 2);
            if (document.getElementById(a).innerHTML != null && document.getElementById(b).innerHTML != null)
            {
                document.getElementById(a).style.backgroundColor = "green";
                document.getElementById(b).style.backgroundColor = "green";
            }
            break;
        case "G8":
            var a = letters[index_letter + 1] + (test - 2);
            var b = letters[index_letter - 1] + (test - 2);
            if (document.getElementById(a).innerHTML != null && document.getElementById(b).innerHTML != null)
            {
                document.getElementById(a).style.backgroundColor = "green";
                document.getElementById(b).style.backgroundColor = "green";
            }
            break;
    }

    console.log("This is rook player 1");
    see_move(element, "rook", 1);
}