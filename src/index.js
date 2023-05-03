import './reset.css';
import './style.css';

import Todo from './createTodo';
import Folder from './createFolder';
import displayFolder from './displayFolder';
import addInputBtnEvent from './eventHandlers';
import createTodoInputs from './createInputs';

const newFolder = new Folder('Tomorrow');
console.log(newFolder);
displayFolder(newFolder);

addInputBtnEvent();

// const todosContent = document.querySelector('.todos-content');

// todosContent.append(createTodoInputs());
