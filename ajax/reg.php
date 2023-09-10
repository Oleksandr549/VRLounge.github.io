<?php

    $username = trim(filter_var($_POST['username'], FILTER_SANITIZE_STRING));
    $email = trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL));
    $login = trim(filter_var($_POST['login'], FILTER_SANITIZE_STRING));
    $pass = trim(filter_var($_POST['pass'], FILTER_SANITIZE_STRING));

        $error = "";

    if(strlen($username) <= 3)
    $error = "Error name";
    else if (strlen($email) <= 3)
     $error = "Error email";
    else if (strlen($login) <= 3)
     $error = "Error login";
    else if (strlen($pass) <= 3)
     $error = "Error pass";

     if($error != ""){
        echo $error;
        exit();
     }
    // $hash = "3212sd";
    // $pass = md5($pass);
   
    require_once '../mysqlconect.php';

   
    $sql = 'INSERT INTO users(name, email, login, pass) VALUES(?,?,?,?)';
    $query = $pdo->prepare($sql);
    $query->execute([$username, $email, $login, $pass]);
    echo "Ready";
?>