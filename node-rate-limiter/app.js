const express=require("express")
const app=express();
const rateLimitMiddleware = require("./middlewares/ratelimit");

app.get("/api/blog",rateLimitMiddleware, (req, res) => {
    res.send({
      success: true,
      message: "Welcome to our Blog API Rate Limiter Project 🎉",
    });
  });
  
  app.get("/api/blog/post",rateLimitMiddleware, (req, res) => {
    res.send({
      success: true,
      author: "Mike Abdul",
      "title": "Creating NodeJs Rate Limiter",
      "post": "..."
    });
  });
app.listen(3000,(req,res)=>
{
    console.log("connected")
})