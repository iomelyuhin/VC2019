<?php

$recepient = "i.omelyuhin@gmail.com";
$sitename = "ПКФ Алмаз";


$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone\nВопрос: $text  ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: info@almaz43.ru");
?>