require('dotenv').config();
const express = require("express");
const { connectionMongoDb } = require("./connection.js")

const useRouter = require("./routes/userRouter.js")

const { logReqRes } = require("./miiddlerwares/indexMiddlerWare.js")

const app = express();
const port = process.env.port || 5000;

//connection db
connectionMongoDb(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

// Middleware to parse JSON
app.use(express.urlencoded({ extended: false })); //this line
app.use(logReqRes("log.txt"))

// app.use(express.json());



// Ensure indexes are created
// User.createIndexes();

//Routes
app.use("/api/user", useRouter)



// Start the Server
app.listen(port, () => {
    console.log(`[SERVER] Server started: http://localhost:${port}`);
});
