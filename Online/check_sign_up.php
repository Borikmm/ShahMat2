<?php
    session_start();

    require_once 'connection.php';

    $login = filter_var(trim($_POST['login']), 
    FILTER_SANITIZE_STRING);
    $password = filter_var(trim($_POST['password']), 
    FILTER_SANITIZE_STRING);
    $telephone = filter_var(trim($_POST['telephone']), 
    FILTER_SANITIZE_STRING);


    if (mb_strlen($login) < 5 || mb_strlen($login) > 19 )
    {
        $_SESSION["message"] = "false length login (< 5, > 19)";
        header('Location: ../Pages/sign_up.php');
        exit();
    }
    else if (mb_strlen($password) < 8 || mb_strlen($password) > 20 )
    {
        $_SESSION["message"] = "false length password (> 8, < 20)";
        header('Location: ../Pages/sign_up.php');
        exit();
    }
    else if (mb_strlen($telephone) != 5)
    {
        $_SESSION["message"] = "false length telephone (= 5)";
        header('Location: ../Pages/sign_up.php');
        exit();
    }

    $sql_query = "INSERT INTO `users` (`id`, `name`, `password`, `telephone`) VALUES (NULL, '$login', '$password', '$telephone')";

    if (mysqli_query($connection, query:$sql_query)) {
        $_SESSION["message"] = "Log in success";
        header('Location: ../Pages/sign_in.php');

    } else {
        $_SESSION["message"] = "error add";
        header('Location: ../Pages/sign_up.php');
    }

    mysqli_close($connection);
?>