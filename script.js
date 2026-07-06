// alert("Welcome to the Dice Game!")
var player1 = prompt('Please Enter Plauer1 name :')
player1 = player1.toUpperCase()
var player2 = prompt('Please Enter Plauer2 name :')
player2 = player2.toUpperCase()
var resultMessage = document.getElementById('resultMessage')
var image1 = document.querySelectorAll('img')[0]
document.querySelectorAll('p')[1].innerHTML = player1
document.querySelectorAll('p')[2].innerHTML = player2
var image2 = document.querySelectorAll('img')[1]
var rollButton = document.getElementById('rollButton')

function rollDice() {
  var dice1 = Math.floor(Math.random() * 6) + 1
  var image1src = 'images/' + dice1 + '.png'
  image1.setAttribute('src', image1src)

  var dice2 = Math.floor(Math.random() * 6) + 1
  var image2src = 'images/' + dice2 + '.png'
  image2.setAttribute('src', image2src)

  if (dice1 === dice2) {
    resultMessage.innerHTML = '🙃 Match Draw try again!'
  }
  else if (dice1 > dice2) {
    resultMessage.innerHTML = '🥳 ' + player1 + ' Won the match!'
  } else {
    resultMessage.innerHTML = '🥳 ' + player2 + ' Won the match!'
  }
}

rollButton.addEventListener('click', rollDice)
rollDice()
