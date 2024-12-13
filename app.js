// creating the table with DOM manipulation
const table = document.querySelector("table");
let number = 1;
for (i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement("td");
    td.textContent = number;
    number++;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

const tdEl = document.querySelectorAll("td");
const attemptsEl = document.querySelector("#guesses-number");

setTimeout(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 5
  let attempts = 10; // Set initial attempts
  console.log(randomNumber);

  

  while (attempts > 0) {
    attemptsEl.textContent = attempts;
    let guessStr = prompt(
      `Guess a number between 1 and 5 \nYou have ${attempts} attempts left:`
    );

    if (guessStr === null) {
      // If the user cancels the prompt
      alert("Game canceled. Thanks for playing!");

      break;
    }

    let guessNum = Number(guessStr);

    if (guessNum < 1 || guessNum > 100) {
      alert("Number should be in range provided");

      attempts--;

      continue;
    }

    // Check if the input is a valid number
    if (isNaN(guessNum)) {
      alert(
        `${guessStr} is not a valid number. Please enter a number between 1 and 5.`
      );
      attempts--;
      continue;
    }

    // Check the guess against the random number
    if (guessNum === randomNumber) {
     
      tdEl.forEach((td) => {
        if (Number(td.textContent) === guessNum) {
          td.style.backgroundColor = "green";
        }
      });
     setTimeout( alert(
        `Congratulations! You guessed the number correctly. It was ${randomNumber}.`
      ),500)
      break;
    } else if (guessNum < randomNumber) {
      
      for (i = guessNum; i >= 0; i--) {
        if (Number(tdEl[i].textContent) < guessNum) {
          tdEl[i].style.backgroundColor = "red";
        }
      }

      setTimeout(alert("The number is higher."),500)
    } else {
     
        for (i = guessNum; i < tdEl.length; i++) {
            if (Number(tdEl[i].textContent) > guessNum) {
              tdEl[i].style.backgroundColor = "red";
            }
          }
     
     alert("The number is lower.")
    }

    // Decrement attempts
    attempts--;

    if (attempts === 0) {
      alert(
        `Game over! You've used all your attempts. The number was ${randomNumber}.`
      );
    }
  }
}, 500);
