import Folder from './Folder';
import Todo from './Todo';
import displayFolder from './displayFolder';
import displayTodoInputs from './displayTodoInputs';

function createFolderBtnEvent(btn) {
  btn.addEventListener('click', function (e) {
    const folderName = e.target.previousElementSibling.value;
    if (!folderName) {
      return;
    } else {
      const newFolder = new Folder(folderName);
      e.target.parentNode.remove();
      displayFolder(newFolder);
    }
  });
}

function addInputBtnEvent() {
  const addFolderBtn = document.querySelector('#add-folder-btn');

  addFolderBtn.addEventListener('click', function (e) {
    const folders = document.querySelector('#folders');

    if (folders.children[folders.children.length - 1].children.length === 2) {
      return;
    } else {
      // Create input element
      const input = document.createElement('input');
      input.setAttribute('type', 'text');

      // Create button element
      const addInputBtn = document.createElement('button');
      addInputBtn.textContent = '+';
      createFolderBtnEvent(addInputBtn);

      // Create li element and append input and button
      const li = document.createElement('li');
      li.append(input);
      li.append(addInputBtn);
      folders.append(li);
    }
  });
}

function revealTodoInputs() {
  const revealInputsBtn = document.querySelector('.reveal-inputs-btn');
  revealInputsBtn.addEventListener('click', function (e) {
    e.target.parentNode.insertBefore(displayTodoInputs(), revealInputsBtn);
  });
}

function createTodoAddEvent(btn) {
  btn.addEventListener('click', function (e) {
    const inputs = e.target.parentNode.getElementsByTagName('input');
    const title = inputs[0].value;
    const description = inputs[1].value;
    const dueDate = inputs[2].value;
    const priority = inputs[3].value;

    const newTodo = new Todo(title, description, dueDate, priority);

    console.log(newTodo);
  });
}

export { addInputBtnEvent, revealTodoInputs, createTodoAddEvent };
