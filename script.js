const draggables = document.querySelectorAll('.draggable');
const blank = document.getElementById('blank');
const checkAnswer = document.getElementById('checkAnswer');
const answerMessage = document.getElementById('answerMessage');
let userAnswer = "";




draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
  });
});

blank.addEventListener('dragover', function(event) {
  event.preventDefault(); // Necessary to allow the drop
});

blank.addEventListener('drop', function(event) {
  event.preventDefault();
  userAnswer = event.dataTransfer.getData('text/plain').toLowerCase();
  blank.value = userAnswer;
//   const answer = event.dataTransfer.getData('text/plain').toLowerCase();
//   blank.value = answer; // Set the input's value to the dropped word
  
//   if (answer === 'html') {
//     alert('Congratulations, the answer is correct!');
//   } else {
//     alert('The answer is wrong! Try again.');
//   }
});


checkAnswer.addEventListener('click', function () {
    const correctAnswer = "html";

    if(userAnswer === correctAnswer) {
        // If the answer is correct
        answerMessage.style.display = "block"; // Make the message element visible
        answerMessage.textContent = "Your answer is correct!";
        answerMessage.style.color = "green"; // Optional: Change text color to green
      } else {
        // If the answer is incorrect
        answerMessage.style.display = "block"; // Make the message element visible
        answerMessage.textContent = "Your answer is incorrect. Try again!";
        answerMessage.style.color = "red"; // Optional: Change text color to red
      }


})
