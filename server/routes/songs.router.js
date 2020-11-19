const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // console.log('GET req.body', req.user.id);
    const userId = req.user.id;
    const queryText = `SELECT * FROM "songs" WHERE "completed_status" = FALSE AND "user_id" = $1;`;
    pool.query(queryText, [userId]).then((result) => {
        console.log('result.rows', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in GET', error);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;