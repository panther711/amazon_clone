import express from "express";
import mongoose from "mongoose";
import Videos from "./dbModel.js";

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Header", "*"),
    next();
});

// Db config
const connection_Url =
  "mongodb+srv://admin:sIwdHfMqBYlI0GaX@cluster0.nde22mm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("Full-Stack AMAZON Clone"));

app.get("/v1/posts", (req, res) => res.status(200).send(data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  // POST request is to Add Data to the databases
  // It will let us Add a video DOCUMENT to the videos COLLECTION
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`listen on localhost:${port}`));
