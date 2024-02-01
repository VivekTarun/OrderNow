const mongoose = require("mongoose");


const username = process.env.username;
const passkey = process.env.passkey;
const database = process.env.database;
const cluster = process.env.cluster;
const uri = `mongodb+srv://${username}:${passkey}@${cluster}.xdtigbr.mongodb.net/${database}?retryWrites=true&w=majority`

const mongoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("connected to the database");

        const fetchData = async () => {
            try {
                const foodData = await mongoose.connection.db.collection("food_items");
                const data = await foodData.find({}).toArray();

                const foodCategory = await mongoose.connection.db.collection("food_category")
                const categoryData = await foodCategory.find({}).toArray();

                console.log(data, categoryData);

            } catch (error) {
                console.error("Error connecting to MongoDB Atlas:", error);
            }
        }
        fetchData();
    } catch (error) {
        console.error("Error connecting to the databse:", error);
    }
}
module.exports = mongoDB;