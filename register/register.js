import { participantTemplate, createSummaryMessage } from './Templates.js';

let participant = 1;


document.getElementById('add').addEventListener('click', function () {
  const container = document.getElementById('participants-container');
  participant++;
  container.insertAdjacentHTML('beforeend', participantTemplate(participant));
});

function submitForm(event) {
  event.preventDefault();
  const summaryElement = document.getElementById('summary');
  summaryElement.innerHTML = createSummaryMessage();
}

document.getElementById("submitButton").addEventListener('click', submitForm);