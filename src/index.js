import './reset.css';
import './style.css';

import Todo from './Todo';
import Folder from './Folder';
import displayFolder from './displayFolder';
import { addInputBtnEvent, revealTodoInputs } from './eventHandlers';

const newFolder = new Folder('Tomorrow');
console.log(newFolder);
displayFolder(newFolder);

addInputBtnEvent();
revealTodoInputs();
