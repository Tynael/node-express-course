const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
];

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'Sucessfully got users. Nice!',
        users: mockUserData
    });
});

app.get('/users/:id', function(req, res) {
    res.json({
        success: true,
        message: 'Got one user!',
        user: req.params.id
    });
});

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'Password and username match!',
            token: 'Encrypted token goes here.'
        });
    } else {
        res.json({
            success: false,
            message: 'Password and username do not match!'
        });
    }
});

app.listen(8000, () => {
    console.log("server is running");
});