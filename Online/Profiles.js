function check_user()
{
    if (document.getElementById("name").innerHTML == "name" || document.getElementById("name").innerHTML == " name")
    {
        document.getElementById("link1").href = "Pages/hollow_profile.html";
    }
    else
    {
        document.getElementById("link1").href = "Pages/profile.php";
    }
    
}

function log_out()
{
    console.log("heelo");
}




function check_location(id_loc, href)
{
    if (document.getElementById("name").innerHTML == "name" || document.getElementById("name").innerHTML == " name")
    {
        alert("You are not register!")
        document.getElementById(id_loc).href = "#";
    }
    else
    {
        document.getElementById(id_loc).href = href;
    }
}