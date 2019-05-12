const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req,res) => {
    let sqlQuery = `
        SELECT * FROM "feedback" ORDER BY "id" DESC;
    `
    pool.query(sqlQuery)
    .then((result) => {
        console.log('response from GET route:', result.rows);
        res.send(result.rows);        
    }).catch((error) => {
        console.log("error in GET route:", error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {    
    let feedbackToSend = req.body;
    let sqlQuery = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `

    pool.query(sqlQuery, [feedbackToSend.feeling, feedbackToSend.understanding, feedbackToSend.support, feedbackToSend.comments])
    .then((result) => {
        console.log('response from POST route:', result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in POST route:', error);
        res.sendStatus(500);
    });
})


module.exports = router;