
var player = 0;
var gid1 = null;
var gid2 = null;
var gid1T = null;
var gid2T = null;
var index = 0;
var newGame = null;
var turn = null;
var result = null;
var result2 = null;
var timer = null;

var zero = null;
var one = null;
var two = null;
var three = null;
var four = null;
var five = null;
var six = null;
var seven = null;
var eight = null;


$('#0').click(function(){
if(zero == null && gid1 !== null){
newGame = 0;
index = 0;
gid1T = gid1;
sendMove(this);
}}); 

$('#1').click(function(){
if(one == null && gid1 !== null){
newGame = 0;
index = 1;
gid1T = gid1;
sendMove(this);
}}); 

$('#2').click(function(){
if(two == null && gid1 !== null){
newGame = 0;
index = 2;
gid1T = gid1;
sendMove(this);
}}); 

$('#3').click(function(){
if(three == null && gid1 !== null){
newGame = 0;
index = 3;
gid1T = gid1;
sendMove(this);
}}); 

$('#4').click(function(){
if(four == null && gid1 !== null){
newGame = 0;
index = 4;
gid1T = gid1;
sendMove(this);
}});  

$('#5').click(function(){
if(five == null && gid1 !== null){
newGame = 0;
index = 5;
gid1T = gid1;
sendMove(this);
}});  

$('#6').click(function(){
if(six == null && gid1 !== null){
newGame = 0;
index = 6;
gid1T = gid1;
sendMove(this);
}}); 

$('#7').click(function(){
if(seven == null && gid1 !== null){
newGame = 0;
index = 7;
gid1T = gid1;
sendMove(this);
}}); 

$('#8').click(function(){
if(eight == null && gid1 !== null){
newGame = 0;
index = 8;
gid1T = gid1;
sendMove(this);
}}); 

$('#newGame').click(function(){
if(newGame == null){
player = "x";
newGameFunction();
stayAlive();
}}); 

$('#connectToAGame').click(function(){
var notNullCheck = document.getElementById('gameID').value;
if(gid1 == null && notNullCheck !== ""){
player = "o";
gid1 = document.getElementById('gameID').value;
connectToAGame();
stayAlive();
}}); 


function sendMove(e){
var ajaxRequest = $.ajax({
url:"http://mywebclass.org/~dj65/tictactoe/json.php?0=" +newGame+ "&1=" +gid1T+ "&2=" +player+ "&3=" +index+ "&4=" + gid2T, 
success:function(){
result = ajaxRequest.responseText;
result2 = JSON.parse(result);
zero = result2[0];
one = result2[1];
two = result2[2];
three = result2[3];
four = result2[4];
five = result2[5];
six = result2[6];
seven = result2[7];
eight = result2[8];
gid1  = result2[9];
gid2  = result2[9];
gid1T  = result2[9];
gid2T  = result2[9];
turn = result2[10];
updateAll();
gameCheck();
}
}); 
}

function newGameFunction(){
var ajaxRequest = $.ajax({
url:"http://mywebclass.org/~dj65/tictactoe/json.php?0=1&1=0&2=0&3=0&4=0", 
success:function(){
result = ajaxRequest.responseText;
result2 = JSON.parse(result);
zero = result2[0];
one = result2[1];
two = result2[2];
three = result2[3];
four = result2[4];
five = result2[5];
six = result2[6];
seven = result2[7];
eight = result2[8];
gid1  = result2[9];
gid2  = result2[9];
gid1T  = result2[9];
gid2T  = result2[9];
turn = result2[10];
newGame = "1";
document.getElementById('outerGameID').innerHTML = result2[9];
updateAll();
}
}); 
}

function connectToAGame(){
var ajaxRequest = $.ajax({
url:"http://mywebclass.org/~dj65/tictactoe/json.php?0=0&1=0&2=0&3=0&4=" + gid1, 
success:function(){
if(ajaxRequest.responseText !== "    "){
result = ajaxRequest.responseText;
result2 = JSON.parse(result);
zero = result2[0];
one = result2[1];
two = result2[2];
three = result2[3];
four = result2[4];
five = result2[5];
six = result2[6];
seven = result2[7];
eight = result2[8];
gid1  = result2[9];
gid2  = result2[9];
gid1T  = result2[9];
gid2T  = result2[9];
turn = result2[10];
document.getElementById('player').innerHTML = "&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;You're<span class=\"playerfont\"> "+player+"</span>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; X goes first";
document.getElementById('outerGameID').innerHTML = result2[9];
updateAll();
}
}
}); 
}

function stayAlive(){
timer = setInterval(function(){connectToAGame();gameCheck();},1000);
}



function updateAll(){
if(zero == "x"){document.getElementById('0').innerHTML = "X";}
if(one == "x"){document.getElementById('1').innerHTML = "X";}
if(two == "x"){document.getElementById('2').innerHTML = "X";}
if(three == "x"){document.getElementById('3').innerHTML = "X";}
if(four == "x"){document.getElementById('4').innerHTML = "X";}
if(five == "x"){document.getElementById('5').innerHTML = "X";}
if(six == "x"){document.getElementById('6').innerHTML = "X";}
if(seven == "x"){document.getElementById('7').innerHTML = "X";}
if(eight == "x"){document.getElementById('8').innerHTML = "X";}
if(zero == "o"){document.getElementById('0').innerHTML = "O";}
if(one == "o"){document.getElementById('1').innerHTML = "O";}
if(two == "o"){document.getElementById('2').innerHTML = "O";}
if(three == "o"){document.getElementById('3').innerHTML = "O";}
if(four == "o"){document.getElementById('4').innerHTML = "O";}
if(five == "o"){document.getElementById('5').innerHTML = "O";}
if(six == "o"){document.getElementById('6').innerHTML = "O";}
if(seven == "o"){document.getElementById('7').innerHTML = "O";}
if(eight == "o"){document.getElementById('8').innerHTML = "O";}
$('#outerGameID').innerHTML = gid1;

}

function gameCheck(){
if(zero == "x" && one == "x" && two=="x"){alert("X Wins!!!!!!!!!!");clearInterval(timer);}
if(three == "x" && four == "x" && five=="x"){alert("X Wins!!!!!!!!!!");clearInterval(timer);}
if(six == "x" && seven == "x" && eight=="x"){alert("X Wins!!!!!!!!!!");clearInterval(timer);}
if(zero == "x" && three == "x" && six=="x"){alert("X Wins!!!!!!!!!!");clearInterval(timer);}
if(one == "x" && four == "x" && seven=="x"){alert("X Wins!!!!!!!!!!");clearInterval(timer);}
if(two == "x" && five == "x" && eight=="x"){alert("X Wins!!!!!!!!!!");clearInterval(timer);}
if(zero == "x" && four == "x" && eight=="x"){alert("X Wins!!!!!!!!!!");clearInterval(timer);}
if(six == "x" && four == "x" && two=="x"){alert("X Wins!!!!!!!!!!");clearInterval(timer);}

if(zero == "o" && one == "o" && two=="o"){alert("O Wins!!!!!!!!!!");clearInterval(timer);}
if(three == "o" && four == "o" && five=="o"){alert("O Wins!!!!!!!!!!");clearInterval(timer);}
if(six == "o" && seven == "o" && eight=="o"){alert("O Wins!!!!!!!!!!");clearInterval(timer);}
if(zero == "o" && three == "o" && six=="o"){alert("O Wins!!!!!!!!!!");clearInterval(timer);}
if(one == "o" && four == "o" && seven=="o"){alert("O Wins!!!!!!!!!!");clearInterval(timer);}
if(two == "o" && five == "o" && eight=="o"){alert("O Wins!!!!!!!!!!");clearInterval(timer);}
if(zero == "o" && four == "o" && eight=="o"){alert("O Wins!!!!!!!!!!");clearInterval(timer);}
if(six == "o" && four == "o" && two=="o"){alert("O Wins!!!!!!!!!!");clearInterval(timer);}
}