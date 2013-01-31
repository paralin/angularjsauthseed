<?php
require "logout.php";
$data = file_get_contents("php://input");
$objData = json_decode($data);
$username = $objData->username;
$password = $objData->password;
if(!isset($objData->email)){
    die ("Invalid email!");
}
$email = $objData->email;

//validate the username
if(!ctype_alnum($username)){
    die("Alphanumeric characters only!");
}
if(strlen($username) > 15){
    die("Username must be 15 characters or less.");
}
if(!ctype_alnum($password)){
    die("Password alphanumeric only!");
}
if(strlen($password)<5){
    die("Password must be longer than 5 characters.");
}
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    die("Invalid email.");
}
//if(!ctype_alpha($name)){
//    die("Name must be letters only.");
//}
require "util/conn_mysql.php";
$password = strtolower(md5($password));
$query = "INSERT INTO `user` ( `Password`, `Username`, `Email`) VALUES ('%s', '%s', '%s');";
$result = mysql_query(sprintf($query, mysql_real_escape_string($password), mysql_real_escape_string($username), mysql_real_escape_string($email)))
    or die("Failed to make a new account, ".mysql_error());

//log them in
$_SESSION['sessionId'] = "notimplementedyet";
echo "success";
?>