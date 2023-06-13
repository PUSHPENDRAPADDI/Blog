import mongoose from "mongoose"

const Connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/", {
            useNewUrlParser: true
        });
        console.log("DB Connected");
    } catch (error) {
        console.log("Error while connecting DB");
    }
}

export default  Connection;