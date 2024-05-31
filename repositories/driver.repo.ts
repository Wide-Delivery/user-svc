import {ObjectId} from "mongodb";
import {PreCreatedDriver} from "../models/driver";
import DriverModel from "../business-logic/schemas/driver.schema";

export const saveDriver = async (driver: PreCreatedDriver) => {
    const newDriver = new DriverModel({
        userId: driver.userId,
        mayBeLoader: driver.mayBeLoader,
        searchRadius: driver.searchRadius,
        truck: driver.truck,
        isVerified: driver.isVerified
    });
    return await newDriver.save();
}

export const getDriverById = async (id: ObjectId) => {
    return DriverModel.findById(id);
}

export const getDriverByUserId = async (userId: ObjectId) => {
    return DriverModel.findOne({userId: userId});
}
