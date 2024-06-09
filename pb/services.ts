import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _com_widedelivery_auth_service_AuthServiceClient, AuthServiceDefinition as _com_widedelivery_auth_service_AuthServiceDefinition } from './com/widedelivery/auth/service/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  com: {
    widedelivery: {
      auth: {
        proto: {
          GenericResponse: MessageTypeDefinition
          OAuthSignInInput: MessageTypeDefinition
          SignInUserInput: MessageTypeDefinition
          SignInUserResponse: MessageTypeDefinition
          SignUpUserInput: MessageTypeDefinition
          SignUpUserResponse: MessageTypeDefinition
          UpdateUserInput: MessageTypeDefinition
          User: MessageTypeDefinition
          UserResponse: MessageTypeDefinition
        }
        service: {
          AuthService: SubtypeConstructor<typeof grpc.Client, _com_widedelivery_auth_service_AuthServiceClient> & { service: _com_widedelivery_auth_service_AuthServiceDefinition }
          DriverId: MessageTypeDefinition
          GeneralResponse: MessageTypeDefinition
          GetMeInput: MessageTypeDefinition
          GetUserByIdInput: MessageTypeDefinition
          GetUsersWithFiltersRequest: MessageTypeDefinition
          GetUsersWithFiltersResponse: MessageTypeDefinition
          RefreshTokenInput: MessageTypeDefinition
          RefreshTokenResponse: MessageTypeDefinition
          UserId: MessageTypeDefinition
        }
      }
    }
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
}

