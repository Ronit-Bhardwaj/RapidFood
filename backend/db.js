const mongoose = require('mongoose');
const mongoURI = 'mongodb://ronitbhardwaj08:RapidFood@ac-qsbnsvg-shard-00-00.xcalhwm.mongodb.net:27017,ac-qsbnsvg-shard-00-01.xcalhwm.mongodb.net:27017,ac-qsbnsvg-shard-00-02.xcalhwm.mongodb.net:27017/RapidFoodMERN?ssl=true&replicaSet=atlas-vgzill-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNEwUrlParser: true }, async (err, result) => {
        if (err)
            console.log * ("---", err);
        else {
            console.log("connected");

            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err)
                        console.log(err);
                    else{
                       global.food_items=data;
                       global.foodCategory = catData;
                    }
                })
                // if (err)
                //     console.log(err);
                // else
                //     global.food_items=data;

            })
        }
    });
}
module.exports = mongoDB;