<?php
session_start();
if(isset($_SESSION['sessionId']))
    unset($_SESSION['sessionId']);