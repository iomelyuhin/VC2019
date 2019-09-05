<?php

$recepient = "6100351986@mail.ru, i.omelyuhin@ya.ru";
$sitename = "Киров-вент.рф";


$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone\n ";

$pagetitle = "Заполнена форма БЕСПЛАТНЫЙ ПРОЕКТ \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: info@almaz43.ru");
?>