import './reset.css';
import './style.css';

import { addToAllFolders } from './allFolders';

import Todo from './Todo';
import Folder from './Folder';
import displayFolder from './displayFolder';
import { addInputBtnEvent, revealTodoInputs } from './eventHandlers';

addInputBtnEvent();
revealTodoInputs();

const mainFolder = new Folder('Main');
addToAllFolders(mainFolder);
displayFolder(mainFolder, mainFolder.id);
