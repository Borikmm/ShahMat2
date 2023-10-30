class Data_Base
{
    constructor()
    {
        this.users = new Map();
    }

    get_user(name)
    {
        if (this.users.has(name))
        {
            console.log(this.users.get(name));
        }
        else
        {
            console.log("Doesnt exist");
        }
    }

    set_user(name, data)
    {
        console.log(name);
        console.log(data);

        if(name == "")
        {
            return "Enter true value!";
        }

        if (!this.users.has(name))
        {
            this.users.set(name, data);
            return "Success";
        }
        else
        {
            console.log("Already exist");
            return "Already exist";
        }
        
    }

    get_all_users()
    {
        for (const entry of this.users.entries())
        {
            console.log(entry[0] + " ---- " + entry[1]);
        }
    }
}


function check_user()
{
    if (document.getElementById("name").innerHTML == "name")
    {
        document.getElementById("link1").href = "Pages/hollow_profile.html";
    }
    else
    {
        document.getElementById("link1").href = "Pages/profile.html";
    }
    
}


function check_location(id_loc, href)
{
    if (document.getElementById("name").innerHTML == "name")
    {
        alert("You are not register!")
        document.getElementById(id_loc).href = "#";
    }
    else
    {
        document.getElementById(id_loc).href = href;
    }
}

data = new Data_Base();

function sign_in()
{
    //console.log(document.getElementById("login").value);
    //console.log(document.getElementById("password").value);
    result = data.set_user(document.getElementById("login").value, document.getElementById("password").value);
    alert(result);
}

function sign_up()
{
    //console.log(document.getElementById("login").value);
    //console.log(document.getElementById("password").value);
    result = data.set_user(document.getElementById("login").value, document.getElementById("password").value, document.getElementById("telephone").value);
    alert(result);
}



// data.get_user("Borikmm");
// data.set_user("Borikmm", "20 old");
// data.get_user("Borikmm2");


//data.get_all_users();