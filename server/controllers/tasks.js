// logic
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: function(req, res){
        Task.find({}, function(err, task){
            if(err){
                console.log('Returned error', err);
                res.json({message: "Error", error: err});
            }else{
                res.json({message: "Success", tasks: task})
            }
        })
    },
    find: function(req, res){
        Task.find({_id:req.params.id}, function(err, task){
            if(err){
                console.log('Returned error', err);
                res.json({message: "Error", error: err});
            }else{
                res.json({message: "Success", tasks: task})
            }
        })
    },
    create: function(req, res){
        var task = new Task({title: req.params.title, description: req.params.description});
        task.save(function(err, task){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err});
            }else{
                res.json({tasks: task});
            }
        });
    },
    update: function(req, res){
        Task.update({_id:req.params.id}, {$set: {title: req.params.title, description: req.params.description}}, function(err, task){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err});
            }else{
                res.json({tasks: task});
            }
        })
    },
    delete: function(req, res){
        Task.deleteOne({id:req.params.id}, function(err, task){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err});
            }else{
                res.json({tasks: task});
            } 
        })
    }
}