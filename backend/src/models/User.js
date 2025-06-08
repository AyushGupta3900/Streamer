import mongoose from "mongoose";
import bcrypt from "bcryptjs"; 

// User Schema
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    bio: { type: String, default: "" },
    profilePic: { type: String, default: "" },
    nativeLanguage: { type: String, default: "" },
    learningLanguage: { type: String, default: "" },
    isOnboarded: { type: Boolean, default: false },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
},{ timestamps: true });

const User = mongoose.model("User", userSchema);

// pre hook 
// hashing password before saving it to the database

userSchema.pre("save", async function(next){

    if(!this.isModified("password")) return next();

    // generate salt and hash password
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch(error){
        console.error(error);
        next(error);
    }
});

export default User;