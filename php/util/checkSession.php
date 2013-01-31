<?php
session_start();
if(!isset($_SESSION['sessionId'])){
    header('HTTP/1.0 401 Unauthorized');
    die;
}