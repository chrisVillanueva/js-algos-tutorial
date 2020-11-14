const express = require('express');
const router = express.Router();
const section1 = require('../section01');

//TODO: refactor when mor
for(let f in section1){
    const func = section1[f];
    this[func.name] = func;
};
router.get('/example/:functionName', (req, res) => {
    const { functionName } = req.params;
    const result = this[functionName](req.query);
    res.status(200).send(`result : ${result}`);
});

module.exports = router;



