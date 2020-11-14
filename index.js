const express = require('express');
const { 
    getSection01,
    getDefault,
} = require('./routes'); 

const app = express();

app.use('/01', getSection01);
app.use(getDefault);


exports.jsAlgosTutorial = app;