// alert("Welcome to the Dice Game!");
var player1 = prompt("Please Enter Plauer1 name :");
player1=player1.toUpperCase();
var player2 = prompt("Please Enter Plauer2 name :");
player2=player2.toUpperCase();
var dice1=Math.floor(Math.random()*6)+1;
var image1src="images/"+dice1+".png";
var  image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",image1src)
console.log(dice1);
document.querySelectorAll("p")[1].innerHTML = player1;
document.querySelectorAll("p")[2].innerHTML = player2;

var dice2=Math.floor(Math.random()*6)+1;
var image2src="images/"+dice2+".png";
var  image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",image2src)
console.log(dice2);
if (dice1===dice2){
   document.querySelectorAll("p")[0].innerHTML = "🙃Match Draw try again!";
}
else if (dice1>dice2){
   document.querySelectorAll("p")[0].innerHTML = "🥳"+player1+" Won the match!";

}
else{
   document.querySelectorAll("p")[0].innerHTML = "🥳"+player2+" Won the match!";
}
