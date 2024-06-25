import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB is successfully conneced");
    const PORT = process.env.PORT || 3003;
    app.listen(PORT, () => {
        console.log(`The server is listening on ${PORT}`);
      });
  })
  .catch((err) => console.log("Error connecting to MongoDB!", err));
