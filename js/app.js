var buttonRoll = document.getElementById('diceRoll');
var diceResult = document.getElementById('diceResult');


buttonRoll.addEventListener('click', function() {

  var diceRandom = Math.floor(Math.random() * 6) + 1;
  diceResult.innerHTML = diceRandom;
  
});
