const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get(`/:songId`, (req, res) => {
  // GET route code here
  const song_id = Number(req.params.songId);
  const queryText = `SELECT * FROM "section" WHERE "section"."song_id" = $1;`;
  console.log('songId from SECTIONS GET', song_id);
  

  pool.query(queryText, [song_id])
    .then((result) => {
      res.send(result.rows)
    }).catch((error) => {
      console.log('ERROR in GET SECTIONS', error);
      res.sendStatus(500);
    });
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

router.delete('/delete/:id', (req, res) => {
  const songId = req.params.id;
  const queryText = `DELETE FROM "section" WHERE "section"."song_id" = $1;`;

  pool.query(queryText, [songId])
    .then((result) => {
      res.send(result.rows)
    }).catch((error) => {
      console.log('ERROR in delete section router', error);
      res.sendStatus(500)
    });
})

module.exports = router;