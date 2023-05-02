function displayFolder(folder) {
  const li = document.createElement('li');
  li.textContent = folder.name;

  const folderUl = document.querySelector('#folders');
  folderUl.append(li);
}

export default displayFolder;
