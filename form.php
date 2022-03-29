<?php
    $receiver = 'hello@nicecreativestudio.com';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $description = $_POST['description'];
    $launch = $_POST['launch'];
    $budget = $_POST['budget'];
    $hear = $_POST['hear'];

    $header = "Sent from website contact form";
    $content = "\n Hi! We're " . $email . "\n About our project: " . $description . "\n Our ideal launch date is: " . $launch . "\n Our budget is " . $budget . "\n We heard about you through " . $hear;
    mail($receiver, $name, $content, $header);
?>