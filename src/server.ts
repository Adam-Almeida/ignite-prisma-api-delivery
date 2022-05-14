import express from "express";
import "express-async-errors";
import { ErrorsCaptureMiddleware } from "./middleware/errorsCaptureMiddleware";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use(ErrorsCaptureMiddleware);

app.listen(3333, () => console.log("Server is running"));
