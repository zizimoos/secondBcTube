import "./db";
import "./models/Video";
import "./models/Comment";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ SERVER LISTENING ON http://localhost:${PORT}`)
);
