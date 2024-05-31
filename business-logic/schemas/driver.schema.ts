import mongoose from "mongoose";
import MongooseDelete, {SoftDeleteDocument, SoftDeleteModel} from "mongoose-delete";
import {User} from "../../models/user";

enum TruckType {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

interface Truck {
    truckBrand: string;
    truckModel: string;
    truckPlate: string;
    truckSerialNumber: string;
    truckColor: string;
    truckType: TruckType;
    freeSpaceLength: number;
    freeSpaceWidth: number;
    freeSpaceHeight: number;
}

export interface Driver extends SoftDeleteDocument {
    userId: mongoose.Types.ObjectId | User;
    mayBeLoader: boolean;
    searchRadius: number;
    truck: Truck;
}

const truckSchema = new mongoose.Schema({
    truckBrand: String,
    truckModel: String,
    truckPlate: String,
    truckSerialNumber: {
        type: String,
        unique: true,
    },
    truckColor: String,
    truckType: {
        type: String,
        enum: [TruckType.SMALL, TruckType.MEDIUM, TruckType.LARGE]
    },
    freeSpaceLength: Number,
    freeSpaceWidth: Number,
    freeSpaceHeight: Number,
    transportationsCount: Number,
    isAvailableNow: Boolean,
});

const driverSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    mayBeLoader: {
        type: Boolean,
        default: false
    },
    searchRadius: {
        type: Number,
        default: 10
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    truck: truckSchema,
    transportationsCount: {
        type: Number,
        default: 0,
    },
    isAvailableNow: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const DriverModel: SoftDeleteModel<Driver> = mongoose.model<Driver, MongooseDelete.SoftDeleteModel<Driver>>('Driver', driverSchema);

export default DriverModel;
