// function displayNewTodo(todo) {
//   const div = document.createElement('div');
//   div.classList.add('row');

//   const span = document.createElement('span');
//   span.classList.add('remove');

//   const input = document.createElement('input');
//   input.setAttribute('type', 'checkbox');

//   const p1 = document.createElement('p');
//   const p2 = document.createElement('p');
//   const p3 = document.createElement('p');
//   const p4 = document.createElement('p');

//   p1.textContent = todo.title;
//   p2.textContent = todo.description;
//   p3.textContent = todo.dueDate;
//   p4.textContent = todo.priority;

//   div.append(span);
//   div.append(input);
//   div.append(p1);
//   div.append(p2);
//   div.append(p3);
//   div.append(p4);

//   return div;
// }

function displayTodos(folder) {
  const todosContent = document.querySelector('.todos-content');

  const rows = document.querySelectorAll('.row');
  for (let row of rows) {
    row.remove();
  }

  const todos = folder.todos;
  todos.forEach((todo) => {
    const div = document.createElement('div');
    div.classList.add('row');

    const span = document.createElement('span');
    span.textContent = 'x';
    span.classList.add('remove', 'hidden');
    span.addEventListener('click', function (e) {
      e.target.parentNode.remove();
    });

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    p1.textContent = todo.title;
    p2.textContent = todo.description;
    p3.textContent = todo.dueDate;
    p4.textContent = todo.priority;

    div.append(span);
    div.append(input);
    div.append(p1);
    div.append(p2);
    div.append(p3);
    div.append(p4);

    div.addEventListener('mouseenter', function () {
      span.classList.remove('hidden');
    });
    div.addEventListener('mouseleave', function () {
      span.classList.add('hidden');
    });

    todosContent.prepend(div);
  });
}

export default displayTodos;
