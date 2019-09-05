<?php

$recepient = "6100351986@mail.ru, i.omelyuhin@ya.ru";
$sitename = "Киров-вент.рф";


$phone = trim($_POST["phone"]);
$message = "Телефон: $phone \n";

$pagetitle = "Заполнена форма ПЕРЕЗВОНИТЕ МНЕ! \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: info@almaz43.ru");
?>