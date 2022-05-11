import express from "express";
import { routes } from "./routes";


const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res)=>{
    return res.json({
        message: "hello World Isadora"
    });
});

app.listen(3333, () => console.log("Server is running"))