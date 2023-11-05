<?- session_start() ?>

<!-- ctrl shift delete -->

<!-- 
What do:
1. design in profile and hollow profile                            (easy      dificult)
2. link on git hub in title on index                               (very easy dificult)
3. online: battle between players and system award                 (hard      dificult)
4. inventory: mechanics sell and move chachmate skins, setup skins (hard      dificult)
5. donate: free and case                                           (normal    dificult)
 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel = 'stylesheet' href="Pages/Map.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="Online/Profiles.js" type="text/javascript" charset="utf-8"></script>
    <title>Document</title>
</head>
<body>
    <div id="logo">
        <h1 style="margin: 0;  margin-bottom: 70px; border-bottom: 6px solid rgb(0, 0, 0);">ShahMat2</h1>
        <div class="dropdown">
            <div class="dropbtn">by Borikmm & Meowra & Fraynce
                <div class="dropdown-content">
                  <a href="https://vk.com/borikmm">Borikmm - Programmer</a>
                  <a href="https://vk.com/boss_puzochess">Meowra - Programmer</a>
                  <a href="https://vk.com/ivachyov2017">Fraynce - Designer</a>
                </div>
            </div>
        </div>
    </div>

    <div class="acount">
        <a onclick="check_user()" id="link1"><div><img class="logo" src="Design/profile.png"></div></a>
        <?php 
            if ($_SESSION['user']) 
            {
                echo '<div id="name"> ' . $_SESSION['user'] . '</div>';
            }
            else
            {
                echo '<div id="name"> ' . "undefined" . '</div>';
            }
        ?>
    </div>

    <div class="map">
        <div class="point" id="n1">
            <a id="loc_desert" style="color: rgb(246, 255, 0);" onclick="check_location('loc_desert', 'locations/desert/index.html')">1</a>
            <img src="Design/glass.jpeg" class="img_loc" >
        </div>
        <div class="point" id="n2">
            <a href="locations/forest/index.html" id="loc_forest" style="color: rgb(0, 117, 39);" onclick="check_location('loc_forest', 'locations/forest/index.html')">2</a>
            <img src="Design/forest.jpg" class="img_loc" >
        </div>
        <div class="point" id="n3">
            <a href="locations/city/index.html" id="loc_city" style="color: rgb(0, 60, 102);" onclick="check_location('loc_city', 'locations/city/index.html')">3</a>
            <img src="Design/city.jpeg" class="img_loc" >
        </div>
    </div>
</body>
</html>