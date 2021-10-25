import express from "express"
import certificados from "../database/certificados.js"

const router = express.Router()

router.get("/", function(req, res) {
    res.render("index.pug", { certificados }) 
})


router.get("/certificado/:id", function(req, res) {

    const { id } = req.params

    res.render("certificado.pug", { certificado:certificados[id] })
})


export default router