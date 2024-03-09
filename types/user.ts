import {createUser} from "../services/user.service";

export interface PreCreatedUser {
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    provider: string,
}
