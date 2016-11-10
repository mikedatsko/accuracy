var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/task/:taskId/:name', function (req, res, next) {
    res.render('task', {
        taskId: req.params.taskId,
        name: req.params.name
    });
});

router.post('/task', function (req, res, next) {
    var taskId = req.body.taskId;
    res.redirect('/task/' + taskId + '/' + name);
});

module.exports = router;
