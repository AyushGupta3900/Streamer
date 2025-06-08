import User from "../models/User.js";
import jwt from "jsonwebtoken";
export async function signup(req,res){
    const { fullName, email, password } = req.body;
    // validation 
    try{
    // check if all fields are provided 
    if(!fullName ||!email ||!password){
        return res.status(400).json({ message: "Please fill all fields" });
    } 

    // check if password is valid
    if(password.length < 6){
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.status(400).json({ message: "Email already exists" });
    }

    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const newUser = await User.create({ fullName, email, password, profilePic: randomAvatar });


    // create the user in stream as well 

    // creating JWT Token 
    const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
    
    res.cookie("jwt",token,{
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks
        sameSite: "strict", // prevent CSRF attacks
        secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({ message: "User registered successfully", user: newUser });

}
    catch(error){
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }

}
export async function login(req,res){
    res.send("LogIn Route");
}
export async function logout(req,res){
    res.send("LogOut Route");
}