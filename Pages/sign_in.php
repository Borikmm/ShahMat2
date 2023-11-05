<?php
    session_start();
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel = 'stylesheet' href="../css/sign_in.css">
    <script src="../Online/Profiles.js"></script>
</head>
<body>
    <center><div class="acount">
        <h1 style="color: rgb(151, 151, 237)">Sign in</h1>
        <form action="../Online/check_sign_in.php" method="post">
            <input type="text" class="form" name="login" placeholder="Enter login" id="login">
            <input type="text" class="form" name="password" placeholder="Enter password" id="password">

            <?php 
                if ($_SESSION['message']) echo '<p class="message"> ' . $_SESSION['message'] . ' </p> ';
                unset($_SESSION['message']);
            ?>

            <div class="accept_btn"><button type="submit">></button></div>

        </form>
        


    </div></center>
</body>
</html>