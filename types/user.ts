import {createUser} from "../services/user.service";

export interface PreCreatedUser {
    name: string,
    email: string,
    password: string | null,
    phoneNumber: string,
    provider: string,
}

export interface UserFilters {
    id?: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
    provider?: string;
    role?: string;
    photo?: string;
    createdAtBefore?: Date;
    createdAtAfter?: Date;
    sort?: string;
    limit?: number;
    offset?: number;
    sortDirection?: 'asc' | 'desc';
}
