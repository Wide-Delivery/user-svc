import grpc from "@grpc/grpc-js";

export class ApplicationError extends Error{
    public code: number;

    constructor(message: string, code: grpc.status = grpc.status.INTERNAL) {
        super(message);
        this.code = code;
    }
}
