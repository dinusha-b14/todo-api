var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet mum for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}, {
    id: 3,
    description: 'Go to work',
    completed: true
}];

app.get('/', function (req, res) {
    res.send('ToDo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
    res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req, res) {
    var todoId = parseInt(req.params.id);
    var foundToDo;
    todos.forEach(function (todo) {
        if (todo.id === todoId) {
            foundToDo = todo;
        }
    });

    if (foundToDo) {
        res.json(foundToDo);
    } else {
        res.status(404).send();
    }
})

app.listen(PORT, function () {
    console.log('Express listening on port: ' + PORT + '!'); 
});
