import { addChangeFolderEvent } from './eventHandlers';
import { changeCurrentActiveFolder } from './eventHandlers';

function displayFolder(folder, id) {
  const li = document.createElement('li');
  li.textContent = folder.name;

  addChangeFolderEvent(li);

  li.id = id;

  const folderUl = document.querySelector('#folders');
  folderUl.append(li);
  changeCurrentActiveFolder(li);
}

export default displayFolder;
