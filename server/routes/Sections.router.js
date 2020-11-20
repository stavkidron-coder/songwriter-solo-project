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
  const song_id = req.user.id;
  const section = req.body.section;
  const chords = req.body.chords;

    const queryText = `INSERT INTO "section"`
  
});

module.exports = router;