const bcrypt = require('bcryptjs');

module.exports = {

    signup: async(req, res) =>{
        const db = req.app.get('db');
        const { username, password } =  req.body;
        const hash = await bcrypt.hash(password, 12);

        try{
            const response = await db.add_user([username, hash]);
            req.session.user = {username: response[0].username};
            res.status(201).json(response[0].username);
        } catch(error){
            console.log(error);
            res.status(500).json('Error occurred');
        }
    },

    login: async(req, res) =>{
        const db = req.app.get('db');
        const { username, password } =  req.body;
        db.find_user(username).then(async response =>{
            console.log(response);
            if(!response.length){
                res.status(404).json('No user found');
            } else {
                const match= await bcrypt.compare(password, response[0].hash);
                if(!match){
                    res.status(400).json({error: 'No user found'});
                }else{
                    console.log(response[0].username);
                    req.session.user = {username: response[0].username};
                    res.json({username: response[0].username});
                }
            }
        })
    },

    getUser: async(req, res) =>{
        if(req.session.user){
            res.json(req.session.user);
        }else{
            res.status(401).json({error: 'Please log in'});
        }
    }
}