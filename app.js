const express= require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded());
const mongoose= require('./db')
const userRouter=require("./routers/user.js");
const viewRouter=require("./routers/view.js");
const postRouter=require("./routers/post.js")
const cookieParser=require('cookie-parser');

app.use(express.static("./public"));


mongoose();

app.set("view engine","ejs");
app.set("views","./views")
app.use(cookieParser());
app.use("/api",userRouter);
app.use(viewRouter);
app.use("/api",postRouter);

let port = process.env.PORT || 80

app.listen(port,function()
{

    console.log("Server is running");
})