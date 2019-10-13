<?php

$recepient = "i.omelyuhin@gmail.com, 6100351986@mail.ru";
$sitename = "Киров-вент.рф";

$phone = trim($_POST["phone"]);
$message = "Телефон: $phone ";

$pagetitle = "Заполнена форма ОБРАТНЫЙ ЗВОНОК || \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");