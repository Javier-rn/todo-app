import { createTodoAddEvent } from './eventHandlers';

function displayTodoInputs() {
  const div = document.createElement('div');
  const button = document.createElement('button');
  const span = document.createElement('span');
  const textInput = document.createElement('input');
  const descInput = document.createElement('input');
  const dueDateInput = document.createElement('input');
  const priorityInput = document.createElement('select');

  button.classList.add('add-todo-btn');
  button.textContent = '+';
  createTodoAddEvent(button);
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('placeholder', 'Title');
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('placeholder', 'Description');
  dueDateInput.setAttribute('type', 'date');

  const option1 = document.createElement('option');
  option1.value = 'Low';
  option1.textContent = 'Low';
  const option2 = document.createElement('option');
  option2.value = 'Medium';
  option2.textContent = 'Medium';
  const option3 = document.createElement('option');
  option3.value = 'High';
  option3.textContent = 'High';

  priorityInput.append(option1);
  priorityInput.append(option2);
  priorityInput.append(option3);

  div.append(button);
  div.append(span);
  div.append(textInput);
  div.append(descInput);
  div.append(dueDateInput);
  div.append(priorityInput);

  div.classList.add('row', 'inputs');
  return div;
}

export default displayTodoInputs;
