import {UpdateUserInput} from "../pb/com/widedelivery/auth/proto/UpdateUserInput";
import {SignUpUserInput__Output} from "../pb/com/widedelivery/auth/proto/SignUpUserInput";
import {User__Output} from "../pb/com/widedelivery/auth/proto/User";

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

    static parseFromGrpcRequest(request: SignUpUserInput__Output) {
        return request ? new PreCreatedUser({
            name: request.name,
            email: request.email,
            password: request.password,
            phoneNumber: request.phone_number,
            provider: request.provider
        }) : null;
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
            role: model.role,
            provider: model.provider,
        }) : null;
    }

    static parseFromGrpcRequest(request: UpdateUserInput) {
        return request ? new User({
            id: request.user_id,
            name: request.name,
            email: request.email,
            phoneNumber: request.phone_number,
            photo: request.photo,
            role: request.role
        }) : null;
    }

    getGrpcModel(): User__Output {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone_number: this.phoneNumber,
            photo: this.photo,
            provider: this.provider,
            role: this.role,
            createdAt: {
                seconds: (this.createdAt.getTime() / 1000).toString(),
                nanos: 0
            },
            updatedAt: {
                seconds: (this.updatedAt.getTime() / 1000).toString(),
                nanos: 0
            }
        };
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
            phone_number: this.phoneNumber,
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
