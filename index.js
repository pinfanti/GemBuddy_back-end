require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const parksRoutes = require("./routes/parks");
const activitiesRoutes = require("./routes/activities");
const meetingsRoutes = require("./routes/mettings");


app.use((req, _res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
  });

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/parks", parksRoutes)
app.use("/api/activities", activitiesRoutes)
app.use("/api/meetings", meetingsRoutes)
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});