import express from "express";
import router from "./routes/routes.js"

const app = express();

//http://localhost:3000/


app.set("view engine", "pug");
app.set("views", "./views")

app.use(router)
app.use(express.static("public"))

app.listen( process.env.PORT || 3000, () => {
    console.log("http://localhost:3000/")
})