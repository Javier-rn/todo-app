import './reset.css';
import './style.css';

import Todo from './createTodo';
import Folder from './createFolder';
import displayFolder from './displayFolder';
import addFolderBtnEvent from './eventHandlers';

const newTodo = Todo('Do Yoga', 'Do Yoga description', 'tomorrow', 'high');

console.log(newTodo);

const newFolder = new Folder('Tomorrow');
displayFolder(newFolder);

addFolderBtnEvent();
