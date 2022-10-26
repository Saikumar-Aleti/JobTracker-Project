import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();
import "express-async-errors";
import connectDB from "./db/connect.js";

//routes
import authRouter from "./routes/authRouter.js";
import jobsRouter from "./routes/jobsRouter.js";
//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
const app = express();
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API-Home!" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
//notFoundMiddleware
app.use(notFoundMiddleware);
//errorHandlerMiddleware
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {}
};

start();
