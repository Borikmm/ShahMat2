<?php
    $login = filter_var(trim($_POST['login']), 
    FILTER_SANITIZE_STRING);
    $password = filter_var(trim($_POST['password']), 
    FILTER_SANITIZE_STRING);
    $telephone = filter_var(trim($_POST['telephone']), 
    FILTER_SANITIZE_STRING);


    if (mb_strlen($login) < 5 || mb_strlen($login) > 19 )
    {
        echo "false length login";
        exit();
    }
    else if (mb_strlen($password) < 8 || mb_strlen($password) > 20 )
    {
        echo "false length login";
        exit();
    }
    else if (mb_strlen($telephone) != 5)
    {
        echo "telephone length login";
        exit();
    }

    echo $login, $password, $telephone;

    $mysql = new mysqli('localhost', 'root', 'root', 'register_db');

    $mysql->query("INSERT INTO `users` (`name`, `password`, `telephone`) VALUES('$login', '$password', '$telephone')");

    $mysql->close();
?>