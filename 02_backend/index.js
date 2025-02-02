import dotenv from 'dotenv';
dotenv.config();


// const express = require(`express`);

import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
// app.get('/', function (req, res) {
//     res.send(`Hello, World!`);
// });

app.get('/api/jokes', function (req, res) {

    const jokes = [
        {
            id: 1,
            title: 'A man in a suit and tie is',
            content: 'Working on a new computer'
        },
        {
            id: 2,
            title: 'What do you call a man who has a tattoo of a dragon?',
            content: 'A dragon slayer'
        },
        {
            id: 3,
            title: 'Why did the scarecrow win an award?',
            content: 'He was outstanding in his field'
        },
        {
            id: 4,
            title: 'Why did the chicken cross the road?',
            content: 'To get to the other side'
        },
        {
            id: 5,
            title: 'What do you call a person who always tells the truth?',
            content: 'A liar'
        }
    ]
    res.send(jokes);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

