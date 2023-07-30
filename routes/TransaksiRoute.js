const express = require("express")
var bodyParser = require("body-parser");

const app = express()
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const transaksiController = require("../controllers/transaksi")
const auth = require("../auth/auth")

app.get("/getAll", auth.authVerify, transaksiController.getAllTransaksi)
app.post("/find", auth.authVerify, transaksiController.findTransaksi)
app.post("/", auth.authVerify, transaksiController.addTransaksi)
app.delete("/:id", auth.authVerify, transaksiController.deleteTransaksi)
app.put("/:id", auth.authVerify, transaksiController.updateTransaksi)

module.exports = app