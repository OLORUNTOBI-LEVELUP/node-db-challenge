const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const actionRouter = require("./routes/actionRoutes");
const projectRouter = require("./routes/projectRoutes");


app.use(express.json());


app.use("/actions", actionRouter);
app.use("/projects", projectRouter);

app.listen(port, () => console.log(`listening on port ${port}`));