import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _auth_AuthServiceClient, AuthServiceDefinition as _auth_AuthServiceDefinition } from './auth/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _auth_AuthServiceClient> & { service: _auth_AuthServiceDefinition }
    DriverId: MessageTypeDefinition
    GeneralResponse: MessageTypeDefinition
    GenericResponse: MessageTypeDefinition
    GetMeInput: MessageTypeDefinition
    OAuthSignInInput: MessageTypeDefinition
    RefreshTokenInput: MessageTypeDefinition
    RefreshTokenResponse: MessageTypeDefinition
    SignInUserInput: MessageTypeDefinition
    SignInUserResponse: MessageTypeDefinition
    SignUpUserInput: MessageTypeDefinition
    SignUpUserResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserId: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
}

