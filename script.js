let Gamestart = true;
let turn_player = true;
let event = false;
let chakemate_now = null;
let DB = new Map();
let spores = [];

window.MAIN_INFO =
{
    COLOR_PAINT: "rgba(10, 100, 110, 0.5)"
};

const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

class service
{

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
        if (turn_player) {
            turn_player = false;
        }
        else {
            turn_player = true;
        }
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
    }
}
class knight
{
    static predicthode(element, player) {
        try {
            if (service.what_chackmate(document.getElementById(element))[1] != player || document.getElementById(element).innerHTML == '') {
                
                document.getElementById(element).style.backgroundColor = MAIN_INFO.COLOR_PAINT;
                spores.push(document.getElementById(element));
            }
        }
        catch{
        }
    }
    static predict_hode_prepare(index_letter, test, player){
            var a = letters[index_letter + 1] + (test + 2);
            this.predicthode(a, player);

            var b = letters[index_letter - 1] + (test + 2);
            this.predicthode(b, player);

            var c = letters[index_letter - 1] + (test - 2);
            this.predicthode(c, player);
               
            var d = letters[index_letter + 1] + (test - 2);
            this.predicthode(d, player);

            var e = letters[index_letter - 2] + (test + 1);
            this.predicthode(e, player);

            var f = letters[index_letter - 2] + (test - 1);
            this.predicthode(f, player);

            var e = letters[index_letter - 2] + (test + 1);
            this.predicthode(e, player);

            var g = letters[index_letter + 2] + (test + 1);
            this.predicthode(g, player);

            var h = letters[index_letter + 2] + (test - 1);
            this.predicthode(h, player);
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
                        document.getElementById(letter + number).style.backgroundColor = MAIN_INFO.COLOR_PAINT;
                        spores.push(document.getElementById(letter + number));
                    }
                    else
                    {
                        if (service.what_chackmate(document.getElementById(letter + number))[1] != player)
                        {
                            document.getElementById(letter + number).style.backgroundColor = MAIN_INFO.COLOR_PAINT;
                            spores.push(document.getElementById(letter + number));
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
    static painter(element){
        document.getElementById(element).style.backgroundColor = MAIN_INFO.COLOR_PAINT;
        spores.push(document.getElementById(element));
    }
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
                            this.painter(a);
                            test--;
                            a = test1 + test;
                        }
                        else{
                            if(service.what_chackmate(document.getElementById(a))[1] != player){
                                this.painter(a);
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
                            this.painter(b);
                            test++;
                            b = test1 + test;
                        }
                        else{
                            if(service.what_chackmate(document.getElementById(b))[1] != player){
                                this.painter(b);
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
                            this.painter(b);
                            index_letter++;
                            b = letters[index_letter] + test;
                        }
                        else{
                            if(service.what_chackmate(document.getElementById(b))[1] != player){
                                this.painter(b);
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
                            this.painter(b);
                            index_letter--;
                            b = letters[index_letter] + test;
                        }
                        else{
                            if(service.what_chackmate(document.getElementById(b))[1] != player){
                                this.painter(b);
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
        console.log("hipeople");
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
                spore_left = document.getElementById(`${letters[letters.indexOf(letter) - 1]}${number-1}`);
            }
            catch{console.log("lol")}
            try{
                spore_right = document.getElementById(`${letters[letters.indexOf(letter) + 1]}${number-1}`);
            }
            catch{}
            
        }
        else{
            var i = letter + (number + 1);
            console.log(`${letters[letters.indexOf(letter) - 1]}${number+1}`);
            console.log(`${letters[letters.indexOf(letter) + 1]}${number+1}`);
            try{
                spore_left = document.getElementById(`${letters[letters.indexOf(letter) - 1]}${number+1}`);
            }
            catch{}
            try{
                spore_right = document.getElementById(`${letters[letters.indexOf(letter) + 1]}${number+1}`);
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
                    document.getElementById(j).style.backgroundColor = MAIN_INFO.COLOR_PAINT;
                    spores.push(document.getElementById(j));
                }

    
            }
            catch{
                console.log("error");
            }
        }
    
        try{
            if (spore_left.innerHTML != "" && player != service.what_chackmate(spore_left)[1])
            {
                spore_left.style.backgroundColor = MAIN_INFO.COLOR_PAINT;
                spores.push(spore_left);
            }
        }
        catch{}
        try{
            if (spore_right.innerHTML != "" && player != service.what_chackmate(spore_right)[1])
            {
                spore_right.style.backgroundColor = MAIN_INFO.COLOR_PAINT;
                spores.push(spore_right);
            }
        }
        catch{}

        if (document.getElementById(i).innerHTML == "")
        {
            document.getElementById(i).style.backgroundColor = MAIN_INFO.COLOR_PAINT;
            spores.push(document.getElementById(i));
        }

        chakemate_now = element;
        //console.log("#" +number + letter)
    }
}





function check_have_chakemate(name) {
    var itElement = document.getElementById(name);

    if (itElement.style.backgroundColor == MAIN_INFO.COLOR_PAINT)
    {
        console.log("12345")
        service.move_chakemate(chakemate_now, itElement);
    }

    else{
        var itElement = document.getElementById(name);
        service.clean_spores();
        if(itElement.innerHTML != ""){
            service.move(itElement);
        }
    }
}

