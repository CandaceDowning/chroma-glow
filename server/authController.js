const bcrypt = require("bcryptjs");



module.exports = {
  signup: async (req, res) => {
    const db = req.app.get("db");
    const { playername, password } = req.body;
    console.log(req.body);
    const hash = await bcrypt.hash(password, 12);

    try {
      const response = await db.add_player([playername, hash]);
      console.log(response);
      req.session.player = {
        playername: response[0].playername
      };
      res.status(200).json(response[0].playername);
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Error occurred" });
    }
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { playername, password } = req.body;
    db.find_player(playername).then(async response => {
      console.log(response);
      if (!response.length) {
        res.status(404).json("No player found");
      } else {
        const match = await bcrypt.compare(password, response[0].hash);
        if (!match) {
          res.status(400).json({ error: "No player found" });
        } else {
          console.log(response[0].playername);
          req.session.player = { playername: response[0].playername };
          console.log(req.session);
          res.json(response[0].playername);
        }
      }
    });
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
  },

  // deletePlayer: (req, res) =>{
  //   const db = req.app.get("db");
  //   const { playername } = req.body

  //   db.delete_player()
  // }
};
