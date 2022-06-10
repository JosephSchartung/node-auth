import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    username: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model("users", userSchema);

export default User;