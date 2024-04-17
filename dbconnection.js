const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://s224092776:Dharnani12345@cluster0.cuthsbx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let client; 
const connectDB = async () => {
    try {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        const collection = client.db().collection('tech');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany([
                {
                    title: "BootStrap",
                    path: "images/bootstrap.jpeg",
                    subTitle: "About BootStrap",
                    description: "Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.",
                },
                {
                    title: "jQuery",
                    path: "images/jquery.jpeg",
                    subTitle: "About Jquery",
                    description: "Query is a JavaScript Library.jQuery greatly simplifies JavaScript programming.jQuery is easy to learn. ",
                },
                {
                    title: "Reactjs",
                    path: "images/reactjs.jpeg",
                    subtitle: "About Reactjs",
                    description: "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.",
                },
            ]);
            console.log("Initial data inserted into MongoDB");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Throw error to handle it in the calling code
    }
};
const getClient = () => {
    if (!client) {
        throw new Error('MongoDB connection not established');
    }
    return client;
};
module.exports = { connectDB, getClient };
