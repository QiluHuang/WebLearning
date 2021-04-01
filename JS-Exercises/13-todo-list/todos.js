const todoList = ['Collect Chicken Eggs', 'Clean Litter Box'];

let todoAction = prompt("What would you like to do?");

while (todoAction !== 'quit' && todoAction !== 'q') {
    if (todoAction === 'new') {
        const newTodo = prompt("Ok, what is new todo?");
        todoList.push(newTodo);
        console.log(`${newTodo}added to list`);
    } else if (todoAction === 'list') {
        console.log('**********');
        for (let idx = 0; idx < todoList.length; idx++) {
            console.log(`${idx}: ${todoList[idx]}`);
        }
        console.log('**********');
    } else if (todoAction === 'delete') {
        const deleteIdx = parseInt(prompt("Enter index of todo to delete"));
        if (!Number.isNaN(deleteIdx) && deleteIdx >= todoList.length) {
            deleteIdx = parseInt(prompt("Please enter a valid index"));
        }
        const deleted = todoList.splice(deleteIdx, 1);
        console.log(`Ok, deleted ${deleted[0]}`)
    } else {
        console.log("No such kind of action");
    }
    todoAction = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");
