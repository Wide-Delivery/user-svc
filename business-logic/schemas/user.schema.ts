import mongoose from "mongoose";
import {SoftDeleteDocument, SoftDeleteModel} from 'mongoose-delete';
import MongooseDelete from "mongoose-delete";

interface User extends SoftDeleteDocument{
    email: string;
    name: string;
    phoneNumber: string;
    photo: string;
    password: string;
    provider: string;
    role: string;
}

const userSchema = new mongoose.Schema<User>({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    phoneNumber: String,
    photo: {
        type: String,
        default: 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'
    },
    provider: String,
    role: {
        type: String,
        default: 'USER'
    }
}, { timestamps: true });

userSchema.plugin(MongooseDelete, { deletedBy: true, deletedByType: String, deletedAt: true });

const UserModel: SoftDeleteModel<User> = mongoose.model<User, MongooseDelete.SoftDeleteModel<User>>('User', userSchema);

export default UserModel;


