function addFolderBtnEvent() {
  const addFolderBtn = document.querySelector('#add-folder-btn');

  addFolderBtn.addEventListener('click', function (e) {
    const folders = document.querySelector('#folders');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    const li = document.createElement('li');
    li.append(input);
    folders.append(li);
  });
}

export default addFolderBtnEvent;
