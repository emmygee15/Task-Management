const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 4001;
const jsonParser = express.json();
const fileName = 'students.json';
const fileTask = 'tasks.json';


// Allow requests only from this client
app.use(cors({
    origin: 'http://localhost:3002'
}));

// Load data from file
let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);

//load data for the tasks file
let rawTask = fs.readFileSync(fileTask);
let dataTask = JSON.parse(rawTask);



// This is a RESTful GET web service
app.get('/students', (request, response) => {
    // data.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1 );
    response.send(data);
});

app.get('/tasks/:id', (request, response) => {
    // data.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1 );
    // response.send(data);
    console.log (request.params)
    response.send(dataTask[request.params.id])
});

app.get('/tasks', (request, response) => {
    // data.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1 );
    response.send(dataTask);
});

// This is a RESTful POST web service
app.post('/students', jsonParser, (request, response) => {
    data.push(request.body);
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    response.end();
});

app.post('/tasks', jsonParser, (request, response) => {
    dataTask.push(request.body);
    fs.writeFileSync(fileTask, JSON.stringify(dataTask, null, 2));
    response.end();
});


app.listen(port);
console.log(`server listening on port ${port}`);







