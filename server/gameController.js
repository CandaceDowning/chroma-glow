const shuffle = require('shuffle-array')


module.exports = {
  getFlash: (req, res) => {
    const db = req.app.get("db");

    //call for game information
    db.get_flash()
      .then(flash => {
        let shuffled = shuffle(flash)
        req.session.clash = { flash: shuffled };
        res.status(200).json(flash);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getDecoy: (req, res) => {
    const db = req.app.get("db");

    //call for game information
    db.get_decoy()
      .then(decoy => {
        req.session.decoy = { decoy: decoy},
        res.status(200).json(decoy);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateScore: (req, res) => {
    const db = req.app.get("db");
    const { id, finalScore } = req.body;
    req.session.player.score = +finalScore;

    db.update_score(id, finalScore)
      .then(res.status(200).json(req.session.player))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateLuck: (req, res) => {
    const db = req.app.get("db");
    const { id, luck } = req.body;
    req.session.player.luck = +luck;

    db.update_luck(id, luck)
      .then(res.status(200).json(req.session.player))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getRank: (req, res) => {
    const db = req.app.get("db");

    //call for game information
    db.get_rank()
      .then(rank => {
        req.session.rank = { rank: rank},
        res.status(200).json(rank);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getStats: (req, res) => {
    const db = req.app.get("db");

    //call for game information
    db.get_stats()
      .then(stats => {
        req.session.stats = { stats: stats},
        res.status(200).json(stats);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getDonate: (req, res) => {
    const db = req.app.get("db");

    //call for game information
    db.get_donate()
      .then(donate => {
        req.session.donate = { donate: donate},
        res.status(200).json(donate);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  calReset: (req, res) => {
  const db = req.app.get("db");
  const { id } = req.body;
  req.session.player.level = 5,

  db.reset_cal(id)
    .then(
      console.log(req.session.player),
      res.status(200).json(req.session.player))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
},
donate: (req, res) => {
  const db = req.app.get("db");
  const { id, donation } = req.body;
  console.log(donation)
  req.session.player.donation = donation,
  req.session.player.score = 0

  db.donate(id, donation)
    .then(
      console.log(req.session.player),
      res.status(200).json(req.session.player))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
},

};



