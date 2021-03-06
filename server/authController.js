const bcrypt = require("bcryptjs");

module.exports = {
  signup: async (req, res) => {
    const db = req.app.get("db");
    const { playername, password, luck } = req.body;
    console.log(req.body);
    const hash = await bcrypt.hash(password, 12);

    try {
      const response = await db.add_player([playername, hash, luck ]);
      console.log(response);
      req.session.player = {
        id: response[0].id,
        playername: response[0].playername,
        score: response[0].hi_score,
        luck: response[0].luck,
        level: response[0].cal_level,
        donation: response[0].donation
      };
      res.status(200).json(req.session);
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Error occurred" });
    }
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { playername, password } = req.body;

    db.find_player(playername).then(async response => {
      // console.log(response);
      if (!response.length) {
        req.session.error = "No player found"
        res.status(404).json("No player found");
      } else {
        const match = await bcrypt.compare(password, response[0].hash);
        if (!match) {
          req.session.error = "Incorrect password"
          res.status(400).json("Incorrect password" );
        } else {
          // console.log(response[0].playername);
          req.session.player = {
            id: response[0].id,
            playername: response[0].playername,
            score: response[0].hi_score,
            luck: response[0].luck,
            level: response[0].cal_level, 
            donation: response[0].donation
          };
          console.log(req.session);
          res.json(req.session.player);
        }
      }
    });
  },

  deletePlayer: (req, res) =>{
    const db = req.app.get("db");
    const { id } = req.params
    console.log(req.params)

    db.delete_player(id)
    .then(()=>{
      console.log(id)
      req.session.destroy();
      res.status(200).json()
    })   
  },

  getPlayer: (req, res) => {
    if (req.session.player) {
      res.json(req.session.player);
    } else {
      res.status(401).json({ error: "Please log in" });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).json(req.session);
  }


};
