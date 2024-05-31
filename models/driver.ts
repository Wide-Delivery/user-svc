import {Truck} from "./truck";
import {Driver__Output} from "../pb/auth/Driver";

export class PreCreatedDriver {
    public userId: string;
    public mayBeLoader: boolean;
    public searchRadius: number;
    public truck: Truck;
    public isVerified: boolean;

    constructor(data: any) {
        this.userId = data.userId;
        this.mayBeLoader = data.mayBeLoader;
        this.searchRadius = data.searchRadius;
        this.truck = data.truck;
        this.isVerified = false;
    }
}

export class Driver {
    public driverId: string;
    public userId: string;
    public mayBeLoader: boolean;
    public searchRadius: number;
    public isVerified: boolean;
    public truck: Truck;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(data: any) {
        this.driverId = data.driverId;
        this.userId = data.userId;
        this.mayBeLoader = data.mayBeLoader;
        this.searchRadius = data.searchRadius;
        this.isVerified = data.isVerified;
        this.truck = data.truck;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    static getModel(model: any): Driver | null {
        return model ? new Driver({
            driverId: model.id,
            userId: model.userId,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
            mayBeLoader: model.mayBeLoader,
            searchRadius: model.searchRadius,
            isVerified: model.isVerified,
            truck: Truck.getModel(model.truck),
        }) : null;
    }

    static getGrpcModel(model: Driver): Driver__Output {
        return {
            driverId: model.driverId,
            userId: model.userId,
            mayBeLoader: model.mayBeLoader,
            searchRadius: model.searchRadius,
            truck: Truck.getGrpcModel(model.truck),
        }
    }
}
