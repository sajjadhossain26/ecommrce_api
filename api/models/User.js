
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true   
    },
    email: {
        type: String,
        required: true,
        trim :true,
        unique: true
    },
    mobile : {
        type: String,
        trim: true,
        unique: true,
        default: null,
    },
    gender : {
        type: String,
        enum: ["Female", "Male", "Undifiend"]
    },
    photo: {
        type: String,
        default: null,
    },
    password : {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        default: "Author",
    },
    trash: {
        type: Boolean,
        default: false
    }
    
},{
    timestamps: true
}) 

export default mongoose.model('User', userSchema)