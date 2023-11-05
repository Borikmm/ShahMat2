<?php
    session_start();

    require_once 'connection.php';

    $login = filter_var(trim($_POST['login']), 
    FILTER_SANITIZE_STRING);
    $password = filter_var(trim($_POST['password']), 
    FILTER_SANITIZE_STRING);

    $sql_query_user = "SELECT * FROM `users` WHERE `name` LIKE '$login' AND `password` LIKE '$password'";

    $user = mysqli_query($connection, query:$sql_query_user);

    if (mysqli_num_rows($user) > 0)
    {
        $_SESSION["user"] = $login;
        header('Location: ../index.php');
        exit();
    }
    else
    {
        $_SESSION["message"] = "false login or password";
        header('Location: ../Pages/sign_in.php');
        exit();
    }

    mysqli_close($connection);
?>