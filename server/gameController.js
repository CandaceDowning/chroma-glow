module.exports = {
  getClash: (req, res) => {
    const db = req.app.get("db");

    //call for game information
    db.get_clash()
      .then(clash => {
        req.session.clash = { clash: clash };
        res.status(200).json(clash);
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
  }
};
