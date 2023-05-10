import Folder from './Folder';
import Todo from './Todo';
import displayFolder from './displayFolder';
import displayTodoInputs from './displayTodoInputs';
import { addToAllFolders, allFolders } from './allFolders';
import displayTodos from './displayTodos';

function changeCurrentActiveFolder(folder) {
  const folders = document.querySelector('#folders').children;

  for (let folder of folders) {
    folder.className = '';
  }

  folder.className = 'active';

  const id = document.querySelector('#folders').querySelector('.active').id;

  const currentFolder = allFolders.filter((folder) => {
    return folder.id === id;
  })[0];

  displayTodos(currentFolder);
}

function addChangeFolderEvent(folder) {
  folder.addEventListener('click', function (e) {
    changeCurrentActiveFolder(folder);
  });
}

function createFolderBtnEvent(btn) {
  btn.addEventListener('click', function (e) {
    const folderName = e.target.previousElementSibling.value;
    if (!folderName) {
      return;
    } else {
      const newFolder = new Folder(folderName);
      e.target.parentNode.remove();

      addToAllFolders(newFolder);

      displayFolder(newFolder, newFolder.id);

      displayTodos(newFolder);
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
    const rows = e.target.parentNode.getElementsByClassName('row');
    const lastRow = rows[rows.length - 1];
    console.log(lastRow);
    if (lastRow === undefined) {
      e.target.parentNode.insertBefore(displayTodoInputs(), revealInputsBtn);
    } else if ([...lastRow.classList].includes('inputs')) {
      return;
    } else {
      e.target.parentNode.insertBefore(displayTodoInputs(), revealInputsBtn);
    }
  });
}

function createTodoAddEvent(btn) {
  btn.addEventListener('click', function (e) {
    const inputs = e.target.parentNode.getElementsByTagName('input');
    const select = e.target.parentNode.getElementsByTagName('select')[0];
    const title = inputs[0].value;
    const description = inputs[1].value;
    const dueDate = inputs[2].value;
    const priority = select.value;

    const newTodo = new Todo(title, description, dueDate, priority);

    const id = document.querySelector('#folders').querySelector('.active').id;

    const folder = allFolders.filter((folder) => {
      return folder.id === id;
    })[0];

    folder.addTodo(newTodo);
    displayTodos(folder);
  });
}

export {
  addInputBtnEvent,
  revealTodoInputs,
  createTodoAddEvent,
  addChangeFolderEvent,
  changeCurrentActiveFolder,
};
