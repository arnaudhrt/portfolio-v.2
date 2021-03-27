<?php 

$emailTo = "arnaud3488@gmail.com";
$array = array(
       "nom" => "",
     "email" => "",
   "message" => "",
 "isSuccess" => false
);

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $array["nom"] = verifyInput($_POST["nom"]);
    $array["email"] =  verifyInput($_POST["email"]);
    $array["message"] =  verifyInput($_POST["message"]);
    $array["isSuccess"] = true ; 
    $emailText = "";
    $emailText .= "Nom: {$array["nom"]}\n";
    $emailText .= "email: {$array["email"]}\n";
    $emailText .= "Message: {$array["message"]}\n";
    if($array["isSuccess"]){
        mail($emailTo, "Portfolio : nouveau message", $emailText);
    }    
    echo json_encode($array);
}
function isEmail($var){
    return filter_var($var, FILTER_VALIDATE_EMAIL);
}
function verifyInput($var){ 
    $var = trim($var);
    $var = stripslashes ($var);
    $var = htmlspecialchars ($var);
    return  $var ; 
}?>