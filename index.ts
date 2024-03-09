import * as mongoose from "mongoose";

var express = require('express');
var path = require('path');

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import dotenv from 'dotenv';

//For env File
dotenv.config();

import {
    loginController, oAuthSignInHandler,
    refreshTokensHandler,
    registerController
} from './controllers/auth_controller';
import customConfig from "./config/default";
import {ProtoGrpcType} from "./pb/services";


const { getMeHandler } = require('./controllers/user_controller');

var app  = express();

const options= {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const PORT = 3023;
const PROTO_FILE = '../protos/services.proto';
const packageDef = protoLoader.loadSync(
    path.resolve(__dirname, PROTO_FILE),
    options
);

console.log('PROTO PATH', path.resolve(__dirname, PROTO_FILE))

const proto = grpc.loadPackageDefinition(
    packageDef
) as unknown as ProtoGrpcType;

const authPkg = proto.auth;

const getServer = () => {
    const server = new grpc.Server();
    server.addService(authPkg.AuthService.service, {
            SignUpUser: registerController,
            SignInUser: loginController,
            RefreshToken: refreshTokensHandler,
            GetMe: getMeHandler,
            OAuthSignIn: oAuthSignInHandler,
        }
    );
    return server;
}

main().catch(err => console.error(err));

async function main() {
    console.log(customConfig.mongoConnectionString);
    await mongoose.connect(customConfig.mongoConnectionString); //todo timeout handler

    const routeServer = getServer();
    routeServer.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
        routeServer.start();
        console.log(`🚀 Server listening on ${PORT}`);
    });
}

module.exports = app;
