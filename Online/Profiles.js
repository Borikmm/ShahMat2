
function check_user()
{
    if (document.getElementById("name").innerHTML.trim() == "name")
    {
        document.getElementById("link1").href = "Pages/hollow_profile.html";
    }
    else
    {
        document.getElementById("link1").href = "Pages/profile.php";
    }
    
}


function check_location(id_loc, href)
{
    var buttons = document.querySelectorAll('.btn_change');
    console.log(buttons)
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.btn_change.active').classList.remove('active');
        button.classList.add('active');
      })
    })



    if (document.getElementById("name").innerHTML.trim() == "name")
    {
        alert("You are not register!")
        var element = document.querySelector(`a[id="${id_loc}"]`);
        element.setAttribute('easy-toggle', '#NCategories');
        element.setAttribute('easy-class', '#Nopen');
    }
    else
    {
        var element = document.querySelector(`a[id="${id_loc}"]`);
        element.setAttribute('easy-toggle', '#categories');
        element.setAttribute('easy-class', 'open');
    }
}