import Folder from './createFolder';
import displayFolder from './displayFolder';

function createFolderBtnEvent(btn) {
  btn.addEventListener('click', function (e) {
    const folderName = e.target.previousElementSibling.value;
    const newFolder = new Folder(folderName);
    e.target.parentNode.remove();
    displayFolder(newFolder);
  });
}

function addInputBtnEvent() {
  const addFolderBtn = document.querySelector('#add-folder-btn');

  addFolderBtn.addEventListener('click', function (e) {
    const folders = document.querySelector('#folders');

    if (folders.children[folders.children.length - 1].children.length === 2) {
      console.log('nono');
    } else {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      const li = document.createElement('li');
      li.append(input);

      const addInputBtn = document.createElement('button');
      addInputBtn.textContent = '+';
      createFolderBtnEvent(addInputBtn);

      li.append(addInputBtn);
      folders.append(li);
    }
  });
}

function removeEmptyInput(input) {
  if (input.textContent === '') {
    input.remove();
  }
}

export default addInputBtnEvent;
