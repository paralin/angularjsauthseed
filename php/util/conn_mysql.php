<?php

$con = mysql_connect("localhost", "root", "pass");
if(!$con){
    die('Could not connect to database: '.mysql_error());
}
mysql_select_db("databasename", $con);


