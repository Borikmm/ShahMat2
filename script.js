
let Gamestart = true;

let event = false;
let chakemate_now = null;
let DB = new Map();
let spores = [];
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

function clean_spores(){
    for (let i = 0; i < spores.length; i++)
    {
        spores[i].style.backgroundColor = spores[i].className;
    }
}

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


    if (itElement.style.backgroundColor == "green")
    {
        move_chakemate(chakemate_now, itElement);
    }


    clean_spores();


    if(itElement.innerHTML != ""){
        move(itElement);
    }
}


function move(element){
    var idd = element.childNodes[1].id;

    if ( idd < 9 && idd > 0){
        move_players_pawn(element, 1);
    }
    if (idd >= 9 && idd <= 16){
        move_player1_rook(element);
    }
    if (idd >= 17 && idd <= 24){
        move_players_pawn(element, 2)
    }


}

function move_players_pawn(element, player){
    
    if (player == 1)
    {
        see_move_pawn(element, 1);
    }
    if (player == 2)
    {
        see_move_pawn(element, 2);
    }
}


function see_move_pawn(element, player){
    var number = Number(element.id[1]);
    var letter = element.id[0];

    if (Gamestart)
    {
        var type = "pawn_start";
    }
    else
    {
        var type = "pawn";
    }


    if (type == "pawn_start")
    {
        try {

            if (player == 1)
            {
                var i = letter + (number - 1);
                var j = letter + (number - 2);
            }

            else
            {
                var i = letter + (number + 1);
                var j = letter + (number + 2);
            }

            console.log("#" +number + letter)

            document.getElementById(i).style.backgroundColor = "green";
            document.getElementById(j).style.backgroundColor = "green";
            
            chakemate_now = element;

            spores.push(document.getElementById(i));
            spores.push(document.getElementById(j));

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
            if (document.getElementById(a).innerHTML != null)
            {
                document.getElementById(a).style.backgroundColor = "green";            
            }
            if (document.getElementById(b).innerHTML != null) {
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
}


function move_chakemate(chakemate, where)
{
    console.log("move "+chakemate.childNodes[1].innerHTML+" from " + chakemate.id +" to " + where.id);

    const createEl = (id, text, tag = 'div', _class = 'figure') => {
        const el = document.createElement("div")
        el.id = id
        el.className = _class
        el.textContent = text
        return el
      }

    el = createEl(chakemate.childNodes[1].id, chakemate.childNodes[1].innerHTML, "div", "figure")

    where.appendChild(el);

    chakemate.innerHTML = "";

}