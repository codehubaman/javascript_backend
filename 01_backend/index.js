require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// when app get request at '/' then it will redirect to '/' means listening at '/
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// 2 parameters /about  and callback function
app.get('/about', (req, res) => {
    res.send('This is an Express server running on port 3000.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


