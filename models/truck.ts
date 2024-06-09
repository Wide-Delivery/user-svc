import {Truck__Output} from "../pb/com/widedelivery/driver/proto/Truck";

export enum TrackType {
    SMALL= "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE",
}

export class Truck {
    public truckBrand: string;
    public truckModel: string;
    public truckPlate: string;
    public truckSerialNumber: string;
    public truckColor: string;
    public truckType: TrackType;
    public freeSpaceLength: number;
    public freeSpaceWidth: number;
    public freeSpaceHeight: number;
    public transportationsCount: number;
    public isAvailableNow: boolean;

    constructor(data: any) {
        this.truckBrand = data.truckBrand;
        this.truckModel = data.truckModel;
        this.truckPlate = data.truckPlate;
        this.truckSerialNumber = data.truckSerialNumber;
        this.truckColor = data.truckColor;
        this.truckType = data.truckType;
        this.freeSpaceLength = data.freeSpaceLength;
        this.freeSpaceWidth = data.freeSpaceWidth;
        this.freeSpaceHeight = data.freeSpaceHeight;
        this.transportationsCount = data.transportationsCount;
        this.isAvailableNow = data.isAvailableNow;
    }

    static getModel(model: any) {
        return model ? new Truck({
            truckBrand: model.truckBrand,
            truckModel: model.truckModel,
            truckPlate: model.truckPlate,
            truckSerialNumber: model.truckSerialNumber,
            truckColor: model.truckColor,
            truckType: model.truckType,
            freeSpaceLength: model.freeSpaceLength,
            freeSpaceWidth: model.freeSpaceWidth,
            freeSpaceHeight: model.freeSpaceHeight,
            transportationsCount: model.transportationsCount,
            isAvailableNow: model.isAvailableNow,
        }) : null;
    }

    static getGrpcModel(model: Truck): Truck__Output {
        return {
            truck_brand: model.truckBrand,
            truck_model: model.truckModel,
            truck_plate: model.truckPlate,
            truck_serial_number: model.truckSerialNumber,
            truck_color: model.truckColor,
            truck_type: model.truckType,
            free_space_length: model.freeSpaceLength,
            free_space_width: model.freeSpaceWidth,
            free_space_height: model.freeSpaceHeight,
            transportations_count: model.transportationsCount,
            is_available_now: model.isAvailableNow,
        }
    }
}
