<?php
require('classes/database.php');
class game extends database{
public $gameplay; //a list of all of the moves
public $gameDB; //Database anchor
public $gameID;

public function game(){
parent:: __construct();
$this->gameDB = new database();
}

public function newGame(){
//this method takes an ID parameter and inserts a table into the database based on this number
$this->gameID = rand(1,10000000);
$this->gameplay = array(null,null,null,null,null,null,null,null,null,$this->gameID,0);
$this->gameplay2 = array(null,null,null,null,null,null,null,null,null,$this->gameID,0);
$sample = array(9=>$this->gameID);
$cursor =  $this->find_document($sample);
if($cursor == null)
{
$this->insert_document($this->gameplay);
echo json_encode($this->gameplay2,JSON_FORCE_OBJECT);
}

}

public function setMove($player,$gid,$index){
$sample = array(9=>$gid);
$cursor =  $this->find_document($sample);
if($player=="x" && $cursor != null ){
if($cursor[10]%2 ==0 ){
$turn = $cursor[10] + 1;
$id = new MongoId($cursor['_id']);
$this->collection->update(array("_id"=>$id), array('$set'=>array( 10=>$turn,$index=>$player)));//perform the operation
}
}
if($player=="o" && $cursor != null ){
if($cursor[10]%2 != 0){
$turn = $cursor[10] + 1;
$id = new MongoId($cursor['_id']);
$this->collection->update(array("_id"=>$id), array('$set'=>array( 10=>$turn,$index=>$player)));//perform the operation
}
}

}
public function connectToAGame($num){
$sample = array(9=>$num);
$cursor =  $this->find_document($sample);
if($cursor != null){
echo json_encode($cursor, JSON_FORCE_OBJECT);
}

}

public function newGameX($num){
//this method takes an ID parameter and inserts a table into the database based on this number
$this->gameID = $num;
$this->gameplay = array(null,null,null,null,null,null,null,null,null,$this->gameID,0);
$this->gameplay2 = array(null,null,null,null,null,null,null,null,null,$num,0);
$sample = array(9=>$this->gameID);
$cursor =  $this->find_document($sample);
if($cursor == null)
{
$this->insert_document($this->gameplay);
echo json_encode($this->gameplay2,JSON_FORCE_OBJECT);
}
}

}

?>