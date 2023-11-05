<?- session_start() ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel = 'stylesheet' href="profile.css">
    <script src="../Online/Profiles.js"></script>
</head>
<body>
    <center><div class="acount">
        <div class="block_top">
            <img class="logo" src="../Design/profile.png">
            <form method="post">
                <button id="log_out" type="submit" name="log_out">log_out</button>
            </form>
            
        </div>
        <?php
            if ($_SESSION['user']) 
            {
                echo '<div id="text_name"> ' . $_SESSION['user'] . '</div>';
            }
            else
            {
                echo '<div id="text_name"> ' . "undefined" . '</div>';
            }
            if(isset($_POST["log_out"]))
            {
                $_SESSION["user"] = "name";
                header('Location: ../index.php');
                exit();
            }
        ?>
        <a href="../index.php"><button id="change_location">Main menu</button></a>




    </div></center>
</body>
</html>