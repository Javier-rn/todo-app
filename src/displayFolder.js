import { addChangeFolderEvent } from './eventHandlers';

function displayFolder(folder, id) {
  const li = document.createElement('li');
  li.textContent = folder.name;

  addChangeFolderEvent(li);

  li.id = id;

  const folderUl = document.querySelector('#folders');
  folderUl.append(li);
}

export default displayFolder;
