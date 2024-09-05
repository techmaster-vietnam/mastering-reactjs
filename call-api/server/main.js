const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/data', (req, res) => {
    res.send(
        JSON.stringify([
            'hello',
            'world',
            'foo',
            'bar'
        ])
    );
});
  
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
