const express = require("express")
var bodyParser = require("body-parser");

const app = express()
app.use(express.json())

const mejaController = require("../controllers/meja");
const auth = require("../auth/auth")

app.get("/getAll", auth.authVerify, mejaController.getAllMeja)
app.post("/find", auth.authVerify, mejaController.findMeja)
app.post("/", auth.authVerify, mejaController.addMeja)
app.delete("/:id", auth.authVerify, mejaController.deleteMeja)
app.put("/:id", auth.authVerify, mejaController.updateMeja)

module.exports = app