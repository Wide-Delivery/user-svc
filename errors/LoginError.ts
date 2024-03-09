import {ApplicationError} from "./ApplicationError";
import grpc from "@grpc/grpc-js";

const loginFailedString = "Login failed. ";

export class LoginError extends ApplicationError {
    constructor(message: string = loginFailedString, code: grpc.status = grpc.status.INTERNAL) {
        super(message === loginFailedString ? message : `${loginFailedString}${message}`, code);
    }
}
