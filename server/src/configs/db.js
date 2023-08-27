// require("dotenv").config({path:"../.env"});
const { MONGO_ATLAS } = process.env;
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connect = () => {
	return mongoose.connect(`mongodb://127.0.0.1:27017`);
	// return mongoose.connect(MONGO_ATLAS);
};

module.exports = connect;
