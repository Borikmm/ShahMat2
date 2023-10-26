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
        if (!this.users.has(name))
        {
            this.users.set(name, data);
        }
        else
        {
            console.log("Already exist");
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
        document.getElementById("link1").href = "hollow_profile.html";
    }
    else
    {
        document.getElementById("link1").href = "profile.html";
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
data.set_user("Borikmm", "18 old");
data.get_user("Borikmm");
data.set_user("Borikmm", "20 old");
data.get_user("Borikmm2");
data.get_all_users();