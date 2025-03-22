const mongoose = require('mongoose');
// MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/practice-db-backend', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//     })
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.log("Mongo error:", err));

mongoose.set("strictQuery", true)
async function connectionMongoDb(url){
    return mongoose.connect(url)
}

module.exports = {
    connectionMongoDb,
}
