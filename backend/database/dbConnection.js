import mongoose from "mongoose";


export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://dinesh:dk12@cluster0.y6wwpqs.mongodb.net/?retryWrites=true", 
    { dbName: "Event_Planning_Mern_Stack"})
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};


