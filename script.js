function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('user-choice').textContent = `You chose: ${capitalize(userChoice)}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${capitalize(computerChoice)}`;
  
    const result = getWinner(userChoice, computerChoice);
    document.getElementById('winner').textContent = `Result: ${result}`;
  }
  
  function getWinner(user, computer) {
    if (user === computer) return "It's a Draw!";
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock')
    ) {
      return 'You Win!';
    } else {
      return 'You Lose!';
    }
  }
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  