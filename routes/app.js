var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/task/:taskId/:name', function (req, res, next) {
    var name = req.params.name || 'Someone';
    var taskId = req.params.taskId || 12345;
    res.render('task', {
        taskId: taskId,
        name: name
    });
});

router.post('/task', function (req, res, next) {
    var taskId = req.body.taskId;
    var name = req.body.name;
    res.redirect('/task/' + taskId + '/' + name);
});

module.exports = router;
