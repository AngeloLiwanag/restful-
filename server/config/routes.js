// routes
const tasks = require('../controllers/tasks.js');

module.exports = function(app){

    app.get('/tasks', function(req, res){
        tasks.index(req, res);
    });

    app.get('/task/:id', function(req, res){
        tasks.find(req, res);
    });

    app.get('/task/create/:title/:description', function(req, res){
        tasks.create(req, res);
    })

    app.get('/task/update/:id/:title/:description', function(req, res){
        tasks.update(req, res);
    })

    app.get('/task/delete/:id', function(req, res){
        tasks.delete(req, res);
    })
};