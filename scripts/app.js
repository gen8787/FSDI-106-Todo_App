// G L O B A L   V A R I A B L E S
const allTodos = {
    nextTodoId: 1,
    todos: [],
    completedTodos: []
}


// D E S T R U C T U R E
var { nextTodoId, todos } = allTodos;


// C R E A T E   T O D O
function createTodo() {
    var inputTodo = $("#todo").val();
    var inputPriority = $("#todoPriority").val();

    var newTodo = new Todo(nextTodoId, inputPriority, inputTodo, completed = false);

    todos.push(newTodo);

    oneTodo(newTodo);

    $("#todo").val("")
    $("#todoPriority").val("")
    $("#todo").focus();

    nextTodoId ++;
}


// D I S P L A Y   O N E   T O D O
function oneTodo(todo) {
    let priorityColor = "";

    switch(todo.priority) {
        case "low" :
            priorityColor = "green";
            break;
        case "medium" :
            priorityColor = "yellow";
            break;
        case "high" :
            priorityColor = "red";
            break;
    }

    var oneTodo = `<li id="${todo.todoId}"><button id="${todo.todoId}" class="mb-1 btn btn-sm btn-outline-danger" onclick="completeTodo(${todo.todoId})">Complete</button> <b class="${priorityColor}">${todo.todo}</b></li>`;

    if (todo.completed === false) {
        $("#allTodos").append(oneTodo);
    } else if (todo.completed === true) {
        $("#completedTodos").append(oneTodo);
    }
}


// D I S P L A Y   A L L   T O D O S
function displayAllTodos() {
    $("#allTodos").html("");

    for (var i = 0; i < todos.length; i ++) {
        oneTodo(todos[i]);
    }
}


// C O M P L E T E   T O D O
function completeTodo(todoId) {
    for (var i = 0; i < todos.length; i ++) {
        var completedTodo = todos[i];

        if (completedTodo.todoId === todoId) {
            todos[i].completed = true;
        }
    }

    displayAllTodos();
}

// R E F R E S H   P A G E
const refresh = () => location.reload();


// I N I T
function init() {
    console.log("Document ready.");

    // E V E N T   L I S T E N E R S
    $("#todo").keypress(function(e) {
        if (e.key === "Enter" || e.keyCode === 13) {
            e.preventDefault();
            createTodo();
        }
    });

    $("#btnCreateTodo").click(createTodo);
    $("#btnRefresh").click(refresh);
}

window.onload = init;



// $("#parent").on('click, '#child', function)
// parent section maybe