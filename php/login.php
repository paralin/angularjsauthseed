<?php
require "logout.php";
require "util/conn_mysql.php";
$data = file_get_contents("php://input");
$objData = json_decode($data);
$username = strtolower($objData->username);
$password = $objData->password;
$password = strtolower($password);
$query=sprintf("SELECT * FROM user WHERE Username='%s' AND Password='%s' LIMIT 1;", mysql_real_escape_string($username), mysql_real_escape_string($password));
$result = mysql_query($query);
if(mysql_num_rows($result) > 0){
    $_SESSION['sessionId'] = $username;
    echo "success";
}else{
    echo "No account with those credentials found, for ".$username;
}