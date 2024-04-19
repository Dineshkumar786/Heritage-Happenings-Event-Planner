import express from "express";
import {dbConnection} from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";



const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["POST"],
  credentials: true,
}))



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/message", messageRouter);


app.get("/api/text",(req,res)=>{
  res.send("this is  a simple  get api endpoint");
})


dbConnection();

export default app;

