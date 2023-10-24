let Gamestart = true;
let turn_player = true;
let event = false;
let chakemate_now = null;
let DB = new Map();
let spores = [];
let check_king = false;
let game_end = false;
let who_win = ''
window.MAIN_INFO =
{
    COLOR_PAINT: "rgba(10, 100, 110, 0.5)",
    COLOR_CHECK: "red",
    NUMBER_MOVE: 0,
};

const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

class service
{   
    static check() {
        if (document.getElementById(29) == null) {
            game_end = true;
            who_win = "Win Player 1"
        }
        if (document.getElementById(13) == null) {
            game_end = true;
            who_win = "Win Player 2"
        }
        if (game_end == false) {
            if (turn_player) {
                turn_player = false;
                document.getElementById("who_move").innerHTML = "Ходит игрок 2";
            }
            else {
                turn_player = true;
                document.getElementById("who_move").innerHTML = "Ходит игрок 1";
            }
        }
        else {
            document.getElementById("who_move").innerHTML = who_win;
        }
    }
    static painter(element){
        var field = document.getElementById(element)
        
        if (service.what_chackmate(field)[0] == "king") {
            field.style.backgroundColor = MAIN_INFO.COLOR_CHECK;
            spores.push(field);
        }
        else {
            field.style.backgroundColor = MAIN_INFO.COLOR_PAINT;
            spores.push(field);
        }
      
    
    }

    static what_chackmate(element)
    {
        try{

            if(element.childNodes[1].id[element.childNodes[1].id.length-1] != "H"){
                var idd = element.childNodes[1].id;
            }
            else{
                var idd = element.childNodes[1].id.replace("H", "");
            }

            if (idd < 9 && idd > 0) {
                return ["pawn", 1];
            }
            else if (idd >= 17 && idd <= 24) {
                return ["pawn", 2];
            }
            else if ((idd == 15 || idd == 10)) {
                return ["knight", 1];
            }
            else if ((idd == 26 || idd == 31)) {
                return ["knight", 2];
            }
            else if ((idd == 14 || idd == 11)) {
                return ["bishop", 1];
            }
            else if ((idd == 27 || idd == 30)) {
                return ["bishop", 2];
            }
            else if (idd == 9 || idd == 16){
                return ["rook", 1];
            }
            else if (idd == 25 || idd == 32){
                return ["rook", 2];
            }
            else if (idd == 12)
            {
                return ["queen", 1];
            }
            else if (idd == 28)
            {
                return ["queen", 2];
            }
            else if (idd == 13)
            {
                return ["king", 1];
            }
            else if (idd == 29)
            {
                return ["king", 2];
            }
            
        }
        catch{
            return [0,1]
        }


    }

    static move_chakemate(chakemate, where)
    {
        console.log("move "+chakemate.childNodes[1].innerHTML+" from " + chakemate.id +" to " + where.id);
        MAIN_INFO.NUMBER_MOVE += 1;
        document.getElementById("Text1").innerHTML += (MAIN_INFO.NUMBER_MOVE+". Move "+chakemate.childNodes[1].innerHTML+" from " + chakemate.id +" to " + where.id + "<br>");

        this.what_chackmate(chakemate)
        if (chakemate.childNodes[1].id[chakemate.childNodes[1].id.length-1] != "H" && this.what_chackmate(chakemate)[0] == "pawn"){
            chakemate.childNodes[1].id += "H"
        };


        const createEl = (id, text, tag = 'div', _class = 'figure') => {
            const el = document.createElement("div")
            el.id = id
            el.className = _class
            el.textContent = text
            return el
        }

        var el = createEl(chakemate.childNodes[1].id, chakemate.childNodes[1].innerHTML, "div", "figure");
        //console.log(el)

        chakemate.innerHTML = "";
        where.innerHTML = "";
        where.appendChild(createEl(10000, "", "span", "rtbr"));
        where.appendChild(el);
        this.clean_spores();
        this.check();
        
            
    }


    static clean_spores(){
        for (let i = 0; i < spores.length; i++)
        {
            spores[i].style.backgroundColor = spores[i].className;
        }
    }

    static move(element){

        var chach = this.what_chackmate(element)
        console.log(chach);


        if (chach[0] == "pawn" && turn_player == true && chach[1] == 1) {
            pawnn.move_players_pawn(element, 1);
        }
        if (chach[0] == "pawn" && turn_player == false && chach[1] == 2) {
            pawnn.move_players_pawn(element, 2);
        }
        if (chach[0] == "knight" && turn_player == true && chach[1] == 1) {
            knight.move_player_knight(element, 1);
        }
        if (chach[0] == "knight" && turn_player == false && chach[1] == 2) {
            knight.move_player_knight(element, 2);
        }
        if (chach[0] == "bishop" && turn_player == true && chach[1] == 1) {
            bishop.move_player_bishop(element, 1);
        }
        if (chach[0] == "bishop" && turn_player == false && chach[1] == 2) {
            bishop.move_player_bishop(element, 2);
        }
        if (chach[0] == "rook" && turn_player == true && chach[1] == 1){
            rook.move_player_rook(element, 1)
        }
        if (chach[0] == "rook" && turn_player == false && chach[1] == 2){
            rook.move_player_rook(element, 2)
        }
        if (chach[0] == "queen" && turn_player == true && chach[1] == 1){
            console.log("or");
            queen.move_player_queen(element, 1)
        }
        if (chach[0] == "queen" && turn_player == false && chach[1] == 2){
            queen.move_player_queen(element, 2)
        }
        if (chach[0] == "king" && turn_player == true && chach[1] == 1){
            king.move_player_king(element, 1)
        }
        if (chach[0] == "king" && turn_player == false && chach[1] == 2){
            king.move_player_king(element, 2)
        }
    }
}

class king{
    static predict_move(element, player){
        try {
            if (service.what_chackmate(document.getElementById(element))[1] != player || document.getElementById(element).innerHTML == '') {
                
                service.painter(element);
            }
        }
        catch{
        }
    }
    static move_player_king(element, player){
        var number = Number(element.id[1]);
        var letter = element.id[0];
        var index_letter = letters.indexOf(letter);
        this.predict_move(letter + (number + 1), player);
        this.predict_move(letter + (number - 1), player);
        this.predict_move(letters[index_letter + 1] + number, player);
        this.predict_move(letters[index_letter - 1] + number, player);
        this.predict_move(letters[index_letter + 1] + (number + 1), player);
        this.predict_move(letters[index_letter + 1] + (number - 1), player);
        this.predict_move(letters[index_letter - 1] + (number + 1), player);
        this.predict_move(letters[index_letter - 1] + (number - 1), player);
        chakemate_now = element;
    }
}


class knight
{
    static predicthode(element, player) {
        try {
            if (service.what_chackmate(document.getElementById(element))[1] != player || document.getElementById(element).innerHTML == '') {
                
                service.painter(element);
            }
        }
        catch{
        }
    }
    static predict_hode_prepare(index_letter, test, player){
            this.predicthode(letters[index_letter + 1] + (test + 2), player);

            this.predicthode(letters[index_letter - 1] + (test + 2), player);

            this.predicthode(letters[index_letter - 1] + (test - 2), player);
               
            this.predicthode(letters[index_letter + 1] + (test - 2), player);

            this.predicthode(letters[index_letter - 2] + (test + 1), player);

            this.predicthode(letters[index_letter - 2] + (test - 1), player);

            this.predicthode(letters[index_letter - 2] + (test + 1), player);

            this.predicthode(letters[index_letter + 2] + (test + 1), player);

            this.predicthode(letters[index_letter + 2] + (test - 1), player);
    }

    static move_player_knight(element, player) {
        var test = Number(element.id[1]);
        var test1 = element.id[0];
        var hihi = element.childNodes[1].id;
        var index_letter = letters.indexOf(test1);
        if (element.childNodes[1].id[element.childNodes[1].id.length - 1] != "H") {
            //var hihi = element.childNodes[1].id.(0,);
        }
        this.predict_hode_prepare(index_letter, test, player);
        chakemate_now = element;
    }
}
class bishop
{
    static move_player_bishop(element, player)
    {
        var number = Number(element.id[1]);
        var letter = element.id[0];
        this.green(number, letter, player)
        chakemate_now = element;
    }

    static green(number_start, letter_start, player)
    {
        this.proc(-1, -1, "A", letter_start, number_start, player)
        this.proc(-1, 1, "A", letter_start, number_start, player)
        this.proc(1, 1, "H", letter_start, number_start, player)
        this.proc(1, -1, "H", letter_start, number_start, player)
    }


    static proc(num1, num2, letter_need, letter, number, player)
    {
        for (var a = 0; a < 1000000; a++)
        {
            if (letter == letter_need)
            {
                break
            }
            else
            {
                try
                {
                    letter = letters[letters.indexOf(letter) + num1];
                    number += num2
                    console.log(letter + number);
                    if (document.getElementById(letter + number).innerHTML == "")
                    {
                        service.painter(letter + number);
                    }
                    else
                    {
                        if (service.what_chackmate(document.getElementById(letter + number))[1] != player)
                        {
                            service.painter(letter + number);
                            break;
                        }
                        else
                        {
                            break;
                        }
                    }

                }
                catch
                {
                    break
                }
            }
        }
        // try
        // {
        //     document.getElementById(letters[letters.indexOf(letter) - 1] + (number+1)).style.backgroundColor = MAIN_INFO.COLOR_PAINT;
        //     letter = letters[letters.indexOf(letter) - 1];
        //     number += 1
        //     console.log(letter + number);
        //     spores.push(document.getElementById(letter + number));
        // }
        // catch
        // {

        // } ------------------------------------------------------***********!!!!!!!!!!!!! BIG SNAKE!!!!!!!!!!!!!!!!******************-------------------------------------
    }
}

class rook{
    
   
        
    
    static predict_hode_prepare(element, direct, player){
        var test = Number(element.id[1]);
        var test1 = element.id[0];
        var index_letter = letters.indexOf(test1);
        switch(direct){
            case 1:
                try{
                    var a = test1 + (test - 1);
                    for(var i=0; i<8; i++)
                    {

                        if (document.getElementById(a).innerHTML == "") {
                            service.painter(a);
                            test--;
                            a = test1 + test;
                        }
                        else{
                            if(service.what_chackmate(document.getElementById(a))[1] != player){
                                service.painter(a);
                                break;
                            }
                            break;
                        }                                           
                    }
                }
                catch{
                }
                break;
            case 2:
                try{
                    var b = test1 + (test + 1);
                    for(var i=0; i<8; i++)
                    {
        
                        if (document.getElementById(b).innerHTML == "") {
                            service.painter(b);
                            test++;
                            b = test1 + test;
                        }
                        else{
                            if(service.what_chackmate(document.getElementById(b))[1] != player){
                                service.painter(b);
                                break;
                            }

                            break;
                        }                                           
                    }
                }
                catch{
                }
                break;
            case 3:
                try{
                    index_letter++;
                    var b = letters[index_letter] + test;
                    for(var i=0; i<8; i++)
                    {
        
                        if (document.getElementById(b).innerHTML == "") {
                            service.painter(b);
                            index_letter++;
                            b = letters[index_letter] + test;
                        }
                        else{
                            if(service.what_chackmate(document.getElementById(b))[1] != player){
                                service.painter(b);
                                break;
                            }
                            break;
                        }
                    }
                }
                catch{
                }
                break;
            case 4:
                try{
                    index_letter--;
                    var b = letters[index_letter] + test;
                    for(var i=0; i<8; i++)
                    {
        
                        if (document.getElementById(b).innerHTML == "") {
                            service.painter(b);
                            index_letter--;
                            b = letters[index_letter] + test;
                        }
                        else{
                            if(service.what_chackmate(document.getElementById(b))[1] != player){
                                service.painter(b);
                                break;
                            }
                            break;
                        }                                           
                    }
                }
                catch{
                }
                break;

    }

       
                
    }
    
    static move_player_rook(element, player){
        this.predict_hode_prepare(element, 1, player);
        this.predict_hode_prepare(element, 2, player);
        this.predict_hode_prepare(element, 3, player);
        this.predict_hode_prepare(element, 4, player);



        chakemate_now = element;
    }

}



class pawnn
{
    static move_players_pawn(element, player)
    {
        if (player == 1)
        {
            this.see_move_pawn(element, 1);
        }
        if (player == 2)
        {
            this.see_move_pawn(element, 2);
        }
    }

    static see_move_pawn(element, player){
        var number = Number(element.id[1]);
        var letter = element.id[0];
        var spore_left, spore_right;
        if (element.childNodes[1].id[element.childNodes[1].id.length-1] != "H")
        {
            var type = "pawn_start";
        }
        else
        {
            var type = "pawn";
        }
    
        if (player == 1){
            var i = letter + (number - 1);
            console.log(`${letters[letters.indexOf(letter) - 1]}${number-1}`);
            console.log(`${letters[letters.indexOf(letter) + 1]}${number-1}`);
            try{
                spore_left = `${letters[letters.indexOf(letter) - 1]}${number-1}`;
            }
            catch{console.log("lol")}
            try{
                spore_right = `${letters[letters.indexOf(letter) + 1]}${number-1}`;
            }
            catch{}
            
        }
        else{
            var i = letter + (number + 1);
            console.log(`${letters[letters.indexOf(letter) - 1]}${number+1}`);
            console.log(`${letters[letters.indexOf(letter) + 1]}${number+1}`);
            try{
                spore_left = `${letters[letters.indexOf(letter) - 1]}${number+1}`;
            }
            catch{}
            try{
                spore_right = `${letters[letters.indexOf(letter) + 1]}${number+1}`;
            }
            catch{}
            
        }
    
        if (type == "pawn_start")
        {
            try {
                if (player == 1)
                {
                    var j = letter + (number - 2);
                }
    
                else
                {
                    var j = letter + (number + 2);
                }

                if (document.getElementById(j).innerHTML == "" && document.getElementById(i).innerHTML == "")
                {
                    service.painter(j)
                }

    
            }
            catch{
                console.log("error");
            }
        }
    
        try{
            if (document.getElementById(spore_left).innerHTML != "" && player != service.what_chackmate(document.getElementById(spore_left))[1])
            {
                service.painter(spore_left)
            }
        }
        catch{}
        try{
            if (document.getElementById(spore_right).innerHTML != "" && player != service.what_chackmate(document.getElementById(spore_right)[1]))
            {
                service.painter(spore_right)
            }
        }
        catch{}

        if (document.getElementById(i).innerHTML == "")
        {
            service.painter(i)
        }

        chakemate_now = element;
        //console.log("#" +number + letter)
    }
}

class queen
{
    static move_player_queen(element, player)
    {
        rook.move_player_rook(element, player);
        bishop.move_player_bishop(element, player);
    }

}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function check_have_chakemate(name) {
    var itElement = document.getElementById(name);
    var rgb_ = hexToRgb(document.getElementById("color_").value);
    MAIN_INFO.COLOR_PAINT = `rgba(${rgb_.r}, ${rgb_.g}, ${rgb_.b}, ${document.getElementById("opacity_").value})`;
    console.log(MAIN_INFO.COLOR_PAINT);
    console.log(itElement.style.backgroundColor);
    if (document.getElementById("opacity_").value == "1") {
        MAIN_INFO.COLOR_PAINT = `rgba(${rgb_.r}, ${rgb_.g}, ${rgb_.b}, 0.99)`;
    }
    if (game_end == false) {
        if (itElement.style.backgroundColor == MAIN_INFO.COLOR_PAINT || itElement.style.backgroundColor == MAIN_INFO.COLOR_CHECK) {
            console.log("12345")
            service.move_chakemate(chakemate_now, itElement);
        }

        else {
            var itElement = document.getElementById(name);
            service.clean_spores();
            if (itElement.innerHTML != "") {
                service.move(itElement);
            }
        }
    }
        
}
