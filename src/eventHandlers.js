function addFolderBtnEvent() {
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

export default addFolderBtnEvent;
