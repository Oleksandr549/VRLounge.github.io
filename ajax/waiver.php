<?php

    $username = trim(filter_var($_POST['username'], FILTER_SANITIZE_STRING));
    $birth = trim(filter_var($_POST['birth'], FILTER_SANITIZE_STRING));
    $address = trim(filter_var($_POST['address'], FILTER_SANITIZE_STRING));
    $phone = trim(filter_var($_POST['phone'], FILTER_SANITIZE_STRING));
    $emergencyContact = trim(filter_var($_POST['emergencyContact'], FILTER_SANITIZE_STRING));
    $relationshipToParticipant = trim(filter_var($_POST['relationshipToParticipant'], FILTER_SANITIZE_STRING));
    $phoneEmergency = trim(filter_var($_POST['phoneEmergency'], FILTER_SANITIZE_STRING));
    $name = trim(filter_var($_POST['name'], FILTER_SANITIZE_STRING));
    $signatureWitness = trim(filter_var($_POST['signatureWitness'], FILTER_SANITIZE_STRING));

        $error = "";

        if(strlen($username) <= 1)
        $error = "Error Full Name";
        else if (strlen($birth) <= 8)
         $error = "Error Date of Birth";
        else if (strlen($address) <= 4)
         $error = "Error address";
         else if (strlen($phone) <= 6)
         $error = "Error Phone Number";
         else if (strlen($emergencyContact) <= 1)
         $error = "Error Emergency Contact";
         else if (strlen($relationshipToParticipant) <= 1)
         $error = "Error Relationship to Participant";
         else if (strlen($phoneEmergency) <= 6)
         $error = "Error Emergency Contact Phone Number";
         else if (strlen($name) <= 1)
         $error = "Error Witness name";
         else if (strlen($signatureWitness) <= 1)
         $error = "Error Signature Witness";

         if($error != ""){
            echo $error;
            exit();
         }
   
    require_once '../mysqlconect.php';

    $currentDateTime = date('Y-m-d H:i:s'); // Форматируем текущую дату и время

    $sql = 'INSERT INTO users(username, birth, address, phone, emergencyContact, relationshipToParticipant, phoneEmergency, name, signatureWitness, date) VALUES(?,?,?,?,?,?,?,?,?,?)';
    $query = $pdo->prepare($sql);
    if (!$query->execute([$username, $birth, $address, $phone, $emergencyContact, $relationshipToParticipant, $phoneEmergency, $name ,$signatureWitness, $currentDateTime])) {
        echo "Error: " . implode(", ", $query->errorInfo());
    } else {
        echo "Ready";
    }
?>