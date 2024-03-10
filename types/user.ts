import {createUser} from "../services/user.service";

export interface PreCreatedUser {
    name: string,
    email: string,
    password: string | null,
    phoneNumber: string,
    provider: string,
}
