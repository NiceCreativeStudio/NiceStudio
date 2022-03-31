<?php
    $previous = "javascript:history.go(-1)";
    
    if(isset($_POST['SubmitButton'])){ //check if form was submitted

        $receiver = 'hellonicestudio@gmail.com';
    
        $name = $_POST['name'];
        $email = $_POST['email'];
        $description = $_POST['description'];
        $launch = $_POST['launch__date'];
        $budget = $_POST['budget'];
        $hear = $_POST['hear'];
    
        $header = "Sent from website contact form";
        $content = "\n Hi! We're " . $email . "\n About our project: " . $description . "\n Our ideal launch date is: " . $launch . "\n Our budget is: " . $budget . "\n We heard about you through " . $hear;
        
        mail($receiver, $name, $content, $header);
        
    } 
    echo("<script>alert('We´ll be on touch!')</script>");
    echo("<script>window.location = 'contact.html';</script>");
?>