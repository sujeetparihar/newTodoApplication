let todoList = [
  { item: 'Buy Milk',dueDate: '25/01/2025'},
  { item: 'Oriental college college',dueDate:'25/01/2025'}
]; 
// Global value saving value... array
displayItems() ;// first call when page gets load means here..(thia is also called onject array..)

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value; // To get value from html input
  let todoDate = dateElement.value;
  // console.log(todoItem); 
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
   // removing text from the inputbox innerside(sujeet) To (  0...)
  displayItems(); // whenever we add new item we will call displayItems()
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for(let i=0; i<todoList.length;i++){
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    // Don't need to right both item,dueDate just write De-structuring Process
    let {item, dueDate} = todoList[i];
    newHtml +=  `
    <span> ${item}</span>
    <span> ${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}

// function displayItems(){
//   let displayElement = document.querySelector('#todo-container');
//   displayElement.innerText = '';
//   for(let i=0;i< todolist.length;i++){
//   displayElement.innerText = displayElement.innerText +"\n" +todolist[i];

//   }
// }

