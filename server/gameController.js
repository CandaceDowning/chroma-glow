//this page will house the calls to the db to get the game data on load of each game page

module.exports = {

    getClash: (req, res) => {
    const db = req.app.get('db')


    //call for game information    
    db.get_clash()
    .then(clash => res.status(200).json(clash))
    .catch(err=> {
        console.log(err);
        res.status(500).json(err)
    }) 
    },


    //socket functions
    handleAns: (boo)=>{
        console.log(boo)
    }
}