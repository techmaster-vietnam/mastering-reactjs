const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const userByUsername = {
    dungtv: {
        username: "dungtv",
        displayName: "Dung Ta Van"
    }
};

app.get('/users', (req, res) => {
    res.json(userByUsername);
});

app.post('/users/save', (req, res) => {
    const { username, displayName } = req.body;
    userByUsername[username] = { username, displayName };

    // Trạng thái Created
    res.status(201).json({savedUsername: username});
});

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
