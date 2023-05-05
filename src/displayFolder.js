import { addChangeFolderEvent } from './eventHandlers';

function displayFolder(folder) {
  const li = document.createElement('li');
  li.textContent = folder.name;

  addChangeFolderEvent(li);

  const folderUl = document.querySelector('#folders');
  folderUl.append(li);
}

export default displayFolder;
