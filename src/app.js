const express = require("express");
const routes = require("./routes/index");
require("./config/dbConnect");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");
const cors = require("cors");


const app = express();

app.use(cors({origin: "http://localhost:3000"}));

routes(app);

// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`API escutando em http://localhost:${port}`);
});