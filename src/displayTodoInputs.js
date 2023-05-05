import { createTodoAddEvent } from './eventHandlers';

function displayTodoInputs() {
  const div = document.createElement('div');
  const button = document.createElement('button');
  const span = document.createElement('span');
  const textInput = document.createElement('input');
  const descInput = document.createElement('input');
  const dueDateInput = document.createElement('input');
  const priorityInput = document.createElement('input');

  button.classList.add('add-todo-btn');
  button.textContent = '+';
  createTodoAddEvent(button);
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('placeholder', 'Title');
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('placeholder', 'Description');
  dueDateInput.setAttribute('type', 'text');
  dueDateInput.setAttribute('placeholder', 'Due');
  priorityInput.setAttribute('type', 'text');
  priorityInput.setAttribute('placeholder', 'Priority');

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
