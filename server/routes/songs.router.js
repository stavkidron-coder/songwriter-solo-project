const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/in-the-works', (req, res) => {
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

router.get('/completed', (req, res) => {
    // console.log('GET req.body', req.user.id);
    const userId = req.user.id;
    const queryText = `SELECT * FROM "songs" WHERE "completed_status" = TRUE AND "user_id" = $1;`;
    pool.query(queryText, [userId]).then((result) => {
        console.log('result.rows', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in GET', error);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    const songId = Number(req.params.id);
    const queryText = `SELECT * FROM "songs" WHERE "songs"."id" = ${songId};`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in specific id GET', error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    const user_id = req.user.id;
    const title = req.body.title;
    const key = req.body.key;
    const tempo = req.body.tempo;
    const time_signature = req.body.timeSig;
    const lyrics = req.body.lyrics;
    const instruments = req.body.instruments;
    const reference_songs = req.body.references;
    const notes = req.body.notes;
    const completed_status = req.body.is_complete;

    const queryText = `INSERT INTO "songs" ("user_id", "title", "key", "tempo", "time_signature", "lyrics", "instruments", "reference_songs", "notes", "completed_status")
                        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id;`; 

    pool.query(queryText, [user_id, title, key, tempo, time_signature, lyrics, instruments, reference_songs, notes, completed_status])
    .then((result) => {
        console.log('result', result.rows[0]);
        res.send(result.rows[0] );
    }).catch((error) => {
        console.log('ERROR in POST router', error);
        res.sendStatus(500);
    });
});

module.exports = router;