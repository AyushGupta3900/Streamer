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

```
git config --global user.name "Ayush Gupta"
git config --global user.email "12211028a@gmail.com"
git remote add origin https://github.com/AyushGupta3900/Streamer.git

Option 1: Check the current remote

Run this to see the existing remote:

git remote -v
You'll get something like:

origin  https://github.com/OldUser/OldRepo.git (fetch)
origin  https://github.com/OldUser/OldRepo.git (push)

Option 2: Change the remote to the new GitHub repo

If the remote is pointing to the wrong repo (or you want to update it), run:

git remote set-url origin https://github.com/AyushGupta3900/Streamer.git
Then push:

OR REMOVE THE ORIGIN 
git remote remove origin

git push -u origin main
```