const express = require("express")
var bodyParser = require("body-parser");

const app = express()
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const menuController = require("../controllers/menu");
const auth = require("../auth/auth")

app.get("/getAll", auth.authVerify, menuController.getAllMenu)
app.post("/find", auth.authVerify, menuController.findMenu)
app.post("/", auth.authVerify, menuController.addMenu)
app.delete("/:id", auth.authVerify, menuController.deleteMenu)
app.put("/:id", auth.authVerify, menuController.updateMenu)

module.exports = app