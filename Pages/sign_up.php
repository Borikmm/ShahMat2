<?php
    session_start();
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel = 'stylesheet' href="../css/sign_up.css">
</head>
<body>
    <center><div class="acount">
        <h1 style="color: rgb(151, 151, 237)">Sign up</h1>
        <form action="../Online/check_sign_up.php" method="post">
            <input type="text" class="form" name="login" placeholder="Enter login" id="login">
            <input type="text" class="form" name="password" placeholder="Enter password" id="password">
            <input type="number" class="form" name="telephone" placeholder="Enter telephone" id="telephone">
            <button class="accept_btn" type="submit">Create account</button>

            <?php 
                if ($_SESSION['message']) echo '<p class="message"> ' . $_SESSION['message'] . ' </p> ';
                unset($_SESSION['message']);
            ?>

        </form>

    </div></center>
</body>
</html>