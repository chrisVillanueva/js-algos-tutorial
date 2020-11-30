const express = require('express');
const router = express.Router();
const { readdirSync } = require('fs')

const getDirectories = 
    (source, lookup) =>
        readdirSync(source, { withFileTypes: true })
        .filter(dirent => (
                dirent.isDirectory() &&
                dirent.name.includes(lookup)
        ))
        .map(dirent => dirent.name);

let codeExamples = {};
const sectionDirs = getDirectories('.', 'section');
sectionDirs.forEach(
    section => {
        const modules = require(`./../${section}`);
        for (let f in modules) {
            const func = modules[f];
            codeExamples[func.name] = func;
        }
    }
);

router.get('/example/:functionName', (req, res) => {
    const { functionName } = req.params;
    let result;

    console.log("Example to run => ", functionName);
    
    try {
        result = codeExamples[functionName](req.query);
    }catch{
        result = `Error with function ${functionName}`;
        console.log(result);
    }
    
    res.status(200).send(`result : ${result}`);
});

module.exports = router;



