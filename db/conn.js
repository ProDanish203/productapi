const mongoose = require("mongoose");

// Connecting with database
mongoose.connect("mongodb+srv://danishsidd203:ironmanrocks203@firstmongo.t9wuplp.mongodb.net/rest-api?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("Database Connected")})
.catch((e) => console.log(e))