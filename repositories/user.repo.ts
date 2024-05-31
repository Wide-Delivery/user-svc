import {PreCreatedUser} from "../types/user";
import UserModel from "../business-logic/schemas/user.schema";
import {ObjectId} from "mongodb";

export const saveUser = async (user: PreCreatedUser) => {
    const newUser = new UserModel({
        name: user.name,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        provider: user.provider,
    });
    return await newUser.save();
}

export const getUserById = async (id: ObjectId) => {
    return await UserModel.findById(id);
}

export const getUserByEmail = async (email: string) => {
    return await UserModel.findOne({ email: email });
}

export const deleteUserById = async (id: ObjectId) => {
    return await UserModel.deleteById(id, 'user-svc__soft');
}
