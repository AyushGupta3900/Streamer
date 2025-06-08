# Writing Backend Code

## Initialising the vite app
```
cd frontend 
npm create vite@latest
```

## Initialising the backend 
```
cd backend 
npm init -y
## add dependencies 
npm i express mongoose dotenv cors bcryptjs cookie-parser jsonwebtoken stream-chat 
```

> Make the app.js type="module"
> Now create the server using express 
> Now create the auth routes 

```
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.get("/api/auth/signup",(req,res)=>{
    res.send("SignUp");
});

app.get("/api/auth/login",(req,res)=>{
    res.send("Login");
});

app.get("/api/auth/logout",(req,res)=>{
    res.send("Login");
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});
```