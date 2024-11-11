let input; 

let timeInput;

const error = 'PLEASE ENTER YOUR CURRENT HOUR RANGING BETWEEN 6 and 23 - ( STRICTLY 24-hour format input ) refresh page to try again.';

const refreshLoad = '.';

document.getElementById("userSubmitInfo").onclick = function () {

  input = document.getElementById("userInput").value
  if (input >= 6 && input <= 11) {
    timeInput = (input)
    alert(`Oh, Hey! Look, its the ${input}th hour of the day, Good Morning!`);

  } else if (input >= 12 && input <= 15) {
    timeInput = (input)
    alert(`Oh, Hey! Look, its the ${input}th hour of the day, Good Afternoon!`);

  } else if (input >= 16 && input <= 20) {
    timeInput = (input)
    alert(`Oh, Hey! Look, its the ${input}th hour of the day, Good Evening!`);

  } else if (input == 21) {
    timeInput = (input)
    alert(`Oh, Hey! Look, its the ${input}st hour of the day, Good Evening!`);

  } else if (input == 22) {
    timeInput = (input)
    alert(`Oh, Hey! Look, its the ${input}nd hour of the day, Good Evening!`);

  } else if (input == 23) {
    timeInput = (input)
    alert(`Oh, Hey! Look, its the ${input}rd hour of the day, Good Evening!`);

  } else if (input == 24) {
    timeInput = (input)
    alert(`Oh, Hey! Look, its the ${input}th hour of the day, Good Evening!`);

  } else if (input <= 6 || input >= 24) {
    document.body.innerHTML = (error);
  }
}




 
