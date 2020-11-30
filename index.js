const express = require('express');
const { 
    getSection,
    getDefault,
} = require('./routes'); 

const app = express();

app.use('/', getSection);
app.use(getDefault);


exports.jsAlgosTutorial = app;