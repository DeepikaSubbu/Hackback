const {MongoClient} = require("mongodb");


module.exports = {
    db: {},
    async connect() {
        try{
            const connection = await MongoClient.connect("mongodb+srv://taskhack:root1hack@newcluster.cxfvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            this.db = connection.db("Hackathon");
            console.log(this.db)
        } catch(err) {
            console.log(err)
        }
    }
}