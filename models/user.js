//Import Schema & Model
const {Schema, model} = require("../db/connection")

// The Image Schema
const Image = new Schema({
    URL: String
});

// The User Schema
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    images: [Image]
}, {timestamps: true})




// The User Model
const User = model("User", UserSchema);

// Export The User Model

module.exports = User