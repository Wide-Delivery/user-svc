import {User__Output} from "../pb/auth/User";

export class UserLoginDTO {
    public email: string;
    public password: string;
    public role: string;

    constructor(data: any) {
        this.email = data.email;
        this.password = data.password;
        this.role = data.role;
    }
}

export class PreCreatedUser {
    public email: string;
    public name: string;
    public password: string;
    public phoneNumber: string;
    public provider: string;
    public role: string;
    public photo: string;

    constructor(data: any) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.phoneNumber = data.phoneNumber;
        this.photo = data.photo;
        this.provider = data.provider;
        this.role = data.role;
    }
}

export class User {
    public id: string;
    public createdAt: Date;
    public updatedAt: Date;
    public email: string;
    public name: string;
    public phoneNumber: string;
    public photo: string;
    public password: string;
    public provider: string;
    public role: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.phoneNumber = data.phoneNumber;
        this.photo = data.photo;
        this.password = data.password;
        this.provider = data.provider;
        this.role = data.role;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    static getModel(model: any) {
        return model ? new User({
            id: model.id,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
            name: model.name,
            email: model.email,
            phoneNumber: model.phoneNumber,
            photo: model.photo,
            password: model.password,
            provider: model.provider,
        }) : null;
    }
}

export class UserDTO {
    public id: string;
    public email: string;
    public name: string;
    public phoneNumber: string;
    public photo: string;
    public provider: string;
    public role: string;
    public createdAt: string;
    public updatedAt: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.phoneNumber = data.phoneNumber;
        this.photo = data.photo;
        this.provider = data.provider;
        this.role = data.role;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    static getModel(model: any) {
        return model ? new User({
            id: model.id,
            name: model.name,
            email: model.email,
            phoneNumber: model.phoneNumber,
            photo: model.photo,
            provider: model.provider,
            role: model.role
        }) : null;
    }

    getGrpcModel(): User__Output {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            photo: this.photo,
            provider: this.provider,
            role: this.role,
            createdAt: {
                seconds: (new Date(this.createdAt).getTime() / 1000).toString(),
                nanos: 0
            },
            updatedAt: {
                seconds: (new Date(this.updatedAt).getTime() / 1000).toString(),
                nanos: 0
            }
        };
    }
}
