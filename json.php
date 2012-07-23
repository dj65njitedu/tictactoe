<?php
require('classes/game.php');
$new = new game();

if($_GET[0]!=0){
$new->newGame();}
else if($_GET[1]!=0){
$new->setMove($_GET[2],(int)$_GET[1],(int)$_GET[3]);
$new->connectToAGame((int)$_GET[1]);
}
else if($_GET[4]!=0){
$new->connectToAGame((int)$_GET[4]);}


?>