import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
const app = express()

app.use(express.json())

app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", authRoutes)
app.listen(8000, ()=>{
    console.log("connected..")
})