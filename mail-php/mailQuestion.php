<?php

$recepient = "i.omelyuhin@gmail.com, 6100351986@mail.ru";
$sitename = "Киров-вент.рф";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone \nСообщение: $message";

$pagetitle = "Заполнена форма ВОПРОС || \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");