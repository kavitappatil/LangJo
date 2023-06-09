import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({ 
    name: { 
        type: String,
        required: [true, "Name is required"],
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: true,
    }
}, 
{ timestamps: true });

export default mongoose.model('User', UserSchema);