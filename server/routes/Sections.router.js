const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  // const user_id = Number(req.user.id);
  const song_id = Number(req.body.songId);
  const section = req.body.sectionObject.section;
  const chords = req.body.sectionObject.chords;
  // console.log('song_id for chords', req.body.sectionObject.section);
  

    const queryText = `INSERT INTO "section" ("song_id", "name", "chords") VALUES($1, $2, $3);`;

    pool.query(queryText, [song_id, section, chords])
      .then((result) => {
        res.send(result.rows)
      }).catch((error) => {
        console.log('ERROR in SECTION POST', error);
        res.sendStatus(500);
      });
});

module.exports = router;