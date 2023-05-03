function createTodoInputs() {
  const currentDiv = document.querySelector('.inputs');

  const div = document.createElement('div');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const textInput = document.createElement('input');
  const descInput = document.createElement('input');
  const dueDateInput = document.createElement('input');
  const priorityInput = document.createElement('input');

  span1.classList.add('remove');
  span1.textContent = 'x';
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('placeholder', 'Title');
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('placeholder', 'Description');
  dueDateInput.setAttribute('type', 'text');
  dueDateInput.setAttribute('placeholder', 'Due');
  priorityInput.setAttribute('type', 'text');
  priorityInput.setAttribute('placeholder', 'Priority');

  div.append(span1);
  div.append(span2);
  div.append(textInput);
  div.append(descInput);
  div.append(dueDateInput);
  div.append(priorityInput);

  div.classList.add('row', 'inputs');
  return div;
}

export default createTodoInputs;
