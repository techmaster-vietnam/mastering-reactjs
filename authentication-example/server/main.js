const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const userByUsername = {
    tvd12: {
      username: 'tvd12',
      email: 'itprono3@gmail.com',
      password: '123456',
      displayName: 'Ta Van Dung'
    }
  };
const userNameByActivationToken = { tvd12: 'f7fc8407-abba-4b8c-aa74-24addfa1ba75' };
const usernameByAccessToken = {};
const accessTokenByUsername = {};

app.get('/users/:username', (req, res) => {
    const username = req.params.username;
    res.json(userByUsername[username]);
});

app.post('/users/:username/activate', (req, res) => {
    const username = req.params.username;
    const token = req.params.token;
    const storedUsername = userNameByActivationToken[token];
    res.json({correct: username === storedUsername});
});

app.post('/users/register', (req, res) => {
    const { username, email, password, displayName } = req.body;
    userByUsername[username] = {
        username,
        email,
        password,
        displayName
    };
    const activationToken = uuidv4();
    userNameByActivationToken[username] = activationToken;
    console.log(userByUsername);
    console.log(userNameByActivationToken);
    res.status(201).json({savedUsername: username});
});

app.post('/users/login', (req, res) => {
    const { username, password } = req.body;
    const user = userByUsername[username];
    if (!user || user.password !== password) {
        res.status(404).json({credential: 'invalid'});
        return;
    }
    const accessToken = accessTokenByUsername[username] || uuidv4();
    usernameByAccessToken[accessToken] = username;
    accessTokenByUsername[username] = accessToken;
    res.cookie('X-AccessToken', accessToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        path: '/'
    });
    res.json({accessToken: accessToken});
});

app.post('/users/validate-access-token', (req, res) => {
    const accessToken = req.cookies['X-AccessToken'] || req.get('X-AccessToken');
    console.log("accessToken: ", accessToken);
    const username = usernameByAccessToken[accessToken] || '';
    if (username.length) {
        res.json({valid: true});
    } else {
        res.status(401).json({valid: false});
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
