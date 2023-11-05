<?php

    $user = 'root';
    $password = 'root';
    $db = 'register_db';
    $host = 'localhost';
    $port = 3306;

    $connection = mysqli_connect($host, $user, $password, $db);

    if (!$connection) exit("error to connect db");

?>