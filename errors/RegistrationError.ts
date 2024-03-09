import {ApplicationError} from "./ApplicationError";
import grpc from "@grpc/grpc-js";

const registrationFailedString = "Registration failed. ";

export class RegistrationError extends ApplicationError {
    constructor(message: string = registrationFailedString, code: grpc.status = grpc.status.INTERNAL) {
        super(message === registrationFailedString ? message : `${registrationFailedString}${message}`, code);
    }
}
