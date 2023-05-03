import './reset.css';
import './style.css';

import Todo from './createTodo';
import Folder from './createFolder';
import displayFolder from './displayFolder';
import addInputBtnEvent from './eventHandlers';

const newFolder = new Folder('Tomorrow');
console.log(newFolder);
displayFolder(newFolder);

addInputBtnEvent();
