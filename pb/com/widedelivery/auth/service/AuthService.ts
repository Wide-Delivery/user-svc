// Original file: protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetMeInput as _com_widedelivery_auth_service_GetMeInput, GetMeInput__Output as _com_widedelivery_auth_service_GetMeInput__Output } from '../../../../com/widedelivery/auth/service/GetMeInput';
import type { GetUserByIdInput as _com_widedelivery_auth_service_GetUserByIdInput, GetUserByIdInput__Output as _com_widedelivery_auth_service_GetUserByIdInput__Output } from '../../../../com/widedelivery/auth/service/GetUserByIdInput';
import type { GetUsersWithFiltersRequest as _com_widedelivery_auth_service_GetUsersWithFiltersRequest, GetUsersWithFiltersRequest__Output as _com_widedelivery_auth_service_GetUsersWithFiltersRequest__Output } from '../../../../com/widedelivery/auth/service/GetUsersWithFiltersRequest';
import type { GetUsersWithFiltersResponse as _com_widedelivery_auth_service_GetUsersWithFiltersResponse, GetUsersWithFiltersResponse__Output as _com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output } from '../../../../com/widedelivery/auth/service/GetUsersWithFiltersResponse';
import type { OAuthSignInInput as _com_widedelivery_auth_proto_OAuthSignInInput, OAuthSignInInput__Output as _com_widedelivery_auth_proto_OAuthSignInInput__Output } from '../../../../com/widedelivery/auth/proto/OAuthSignInInput';
import type { RefreshTokenInput as _com_widedelivery_auth_service_RefreshTokenInput, RefreshTokenInput__Output as _com_widedelivery_auth_service_RefreshTokenInput__Output } from '../../../../com/widedelivery/auth/service/RefreshTokenInput';
import type { RefreshTokenResponse as _com_widedelivery_auth_service_RefreshTokenResponse, RefreshTokenResponse__Output as _com_widedelivery_auth_service_RefreshTokenResponse__Output } from '../../../../com/widedelivery/auth/service/RefreshTokenResponse';
import type { SignInUserInput as _com_widedelivery_auth_proto_SignInUserInput, SignInUserInput__Output as _com_widedelivery_auth_proto_SignInUserInput__Output } from '../../../../com/widedelivery/auth/proto/SignInUserInput';
import type { SignInUserResponse as _com_widedelivery_auth_proto_SignInUserResponse, SignInUserResponse__Output as _com_widedelivery_auth_proto_SignInUserResponse__Output } from '../../../../com/widedelivery/auth/proto/SignInUserResponse';
import type { SignUpUserInput as _com_widedelivery_auth_proto_SignUpUserInput, SignUpUserInput__Output as _com_widedelivery_auth_proto_SignUpUserInput__Output } from '../../../../com/widedelivery/auth/proto/SignUpUserInput';
import type { SignUpUserResponse as _com_widedelivery_auth_proto_SignUpUserResponse, SignUpUserResponse__Output as _com_widedelivery_auth_proto_SignUpUserResponse__Output } from '../../../../com/widedelivery/auth/proto/SignUpUserResponse';
import type { UpdateUserInput as _com_widedelivery_auth_proto_UpdateUserInput, UpdateUserInput__Output as _com_widedelivery_auth_proto_UpdateUserInput__Output } from '../../../../com/widedelivery/auth/proto/UpdateUserInput';
import type { UserResponse as _com_widedelivery_auth_proto_UserResponse, UserResponse__Output as _com_widedelivery_auth_proto_UserResponse__Output } from '../../../../com/widedelivery/auth/proto/UserResponse';

export interface AuthServiceClient extends grpc.Client {
  GetMe(argument: _com_widedelivery_auth_service_GetMeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _com_widedelivery_auth_service_GetMeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _com_widedelivery_auth_service_GetMeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _com_widedelivery_auth_service_GetMeInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _com_widedelivery_auth_service_GetMeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _com_widedelivery_auth_service_GetMeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _com_widedelivery_auth_service_GetMeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _com_widedelivery_auth_service_GetMeInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserById(argument: _com_widedelivery_auth_service_GetUserByIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _com_widedelivery_auth_service_GetUserByIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _com_widedelivery_auth_service_GetUserByIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _com_widedelivery_auth_service_GetUserByIdInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _com_widedelivery_auth_service_GetUserByIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _com_widedelivery_auth_service_GetUserByIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _com_widedelivery_auth_service_GetUserByIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _com_widedelivery_auth_service_GetUserByIdInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUsersWithFilters(argument: _com_widedelivery_auth_service_GetUsersWithFiltersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  GetUsersWithFilters(argument: _com_widedelivery_auth_service_GetUsersWithFiltersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  GetUsersWithFilters(argument: _com_widedelivery_auth_service_GetUsersWithFiltersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  GetUsersWithFilters(argument: _com_widedelivery_auth_service_GetUsersWithFiltersRequest, callback: grpc.requestCallback<_com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithFilters(argument: _com_widedelivery_auth_service_GetUsersWithFiltersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithFilters(argument: _com_widedelivery_auth_service_GetUsersWithFiltersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithFilters(argument: _com_widedelivery_auth_service_GetUsersWithFiltersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithFilters(argument: _com_widedelivery_auth_service_GetUsersWithFiltersRequest, callback: grpc.requestCallback<_com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  
  OAuthSignIn(argument: _com_widedelivery_auth_proto_OAuthSignInInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  OAuthSignIn(argument: _com_widedelivery_auth_proto_OAuthSignInInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  OAuthSignIn(argument: _com_widedelivery_auth_proto_OAuthSignInInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  OAuthSignIn(argument: _com_widedelivery_auth_proto_OAuthSignInInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  oAuthSignIn(argument: _com_widedelivery_auth_proto_OAuthSignInInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  oAuthSignIn(argument: _com_widedelivery_auth_proto_OAuthSignInInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  oAuthSignIn(argument: _com_widedelivery_auth_proto_OAuthSignInInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  oAuthSignIn(argument: _com_widedelivery_auth_proto_OAuthSignInInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
  RefreshToken(argument: _com_widedelivery_auth_service_RefreshTokenInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_service_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _com_widedelivery_auth_service_RefreshTokenInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_service_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _com_widedelivery_auth_service_RefreshTokenInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_service_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _com_widedelivery_auth_service_RefreshTokenInput, callback: grpc.requestCallback<_com_widedelivery_auth_service_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _com_widedelivery_auth_service_RefreshTokenInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_service_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _com_widedelivery_auth_service_RefreshTokenInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_service_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _com_widedelivery_auth_service_RefreshTokenInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_service_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _com_widedelivery_auth_service_RefreshTokenInput, callback: grpc.requestCallback<_com_widedelivery_auth_service_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  
  SignInUser(argument: _com_widedelivery_auth_proto_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _com_widedelivery_auth_proto_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _com_widedelivery_auth_proto_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _com_widedelivery_auth_proto_SignInUserInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _com_widedelivery_auth_proto_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _com_widedelivery_auth_proto_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _com_widedelivery_auth_proto_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _com_widedelivery_auth_proto_SignInUserInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
  SignUpUser(argument: _com_widedelivery_auth_proto_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _com_widedelivery_auth_proto_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _com_widedelivery_auth_proto_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _com_widedelivery_auth_proto_SignUpUserInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _com_widedelivery_auth_proto_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _com_widedelivery_auth_proto_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _com_widedelivery_auth_proto_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _com_widedelivery_auth_proto_SignUpUserInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateUser(argument: _com_widedelivery_auth_proto_UpdateUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _com_widedelivery_auth_proto_UpdateUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _com_widedelivery_auth_proto_UpdateUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _com_widedelivery_auth_proto_UpdateUserInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _com_widedelivery_auth_proto_UpdateUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _com_widedelivery_auth_proto_UpdateUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _com_widedelivery_auth_proto_UpdateUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _com_widedelivery_auth_proto_UpdateUserInput, callback: grpc.requestCallback<_com_widedelivery_auth_proto_UserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GetMe: grpc.handleUnaryCall<_com_widedelivery_auth_service_GetMeInput__Output, _com_widedelivery_auth_proto_UserResponse>;
  
  GetUserById: grpc.handleUnaryCall<_com_widedelivery_auth_service_GetUserByIdInput__Output, _com_widedelivery_auth_proto_UserResponse>;
  
  GetUsersWithFilters: grpc.handleUnaryCall<_com_widedelivery_auth_service_GetUsersWithFiltersRequest__Output, _com_widedelivery_auth_service_GetUsersWithFiltersResponse>;
  
  OAuthSignIn: grpc.handleUnaryCall<_com_widedelivery_auth_proto_OAuthSignInInput__Output, _com_widedelivery_auth_proto_SignInUserResponse>;
  
  RefreshToken: grpc.handleUnaryCall<_com_widedelivery_auth_service_RefreshTokenInput__Output, _com_widedelivery_auth_service_RefreshTokenResponse>;
  
  SignInUser: grpc.handleUnaryCall<_com_widedelivery_auth_proto_SignInUserInput__Output, _com_widedelivery_auth_proto_SignInUserResponse>;
  
  SignUpUser: grpc.handleUnaryCall<_com_widedelivery_auth_proto_SignUpUserInput__Output, _com_widedelivery_auth_proto_SignUpUserResponse>;
  
  UpdateUser: grpc.handleUnaryCall<_com_widedelivery_auth_proto_UpdateUserInput__Output, _com_widedelivery_auth_proto_UserResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  GetMe: MethodDefinition<_com_widedelivery_auth_service_GetMeInput, _com_widedelivery_auth_proto_UserResponse, _com_widedelivery_auth_service_GetMeInput__Output, _com_widedelivery_auth_proto_UserResponse__Output>
  GetUserById: MethodDefinition<_com_widedelivery_auth_service_GetUserByIdInput, _com_widedelivery_auth_proto_UserResponse, _com_widedelivery_auth_service_GetUserByIdInput__Output, _com_widedelivery_auth_proto_UserResponse__Output>
  GetUsersWithFilters: MethodDefinition<_com_widedelivery_auth_service_GetUsersWithFiltersRequest, _com_widedelivery_auth_service_GetUsersWithFiltersResponse, _com_widedelivery_auth_service_GetUsersWithFiltersRequest__Output, _com_widedelivery_auth_service_GetUsersWithFiltersResponse__Output>
  OAuthSignIn: MethodDefinition<_com_widedelivery_auth_proto_OAuthSignInInput, _com_widedelivery_auth_proto_SignInUserResponse, _com_widedelivery_auth_proto_OAuthSignInInput__Output, _com_widedelivery_auth_proto_SignInUserResponse__Output>
  RefreshToken: MethodDefinition<_com_widedelivery_auth_service_RefreshTokenInput, _com_widedelivery_auth_service_RefreshTokenResponse, _com_widedelivery_auth_service_RefreshTokenInput__Output, _com_widedelivery_auth_service_RefreshTokenResponse__Output>
  SignInUser: MethodDefinition<_com_widedelivery_auth_proto_SignInUserInput, _com_widedelivery_auth_proto_SignInUserResponse, _com_widedelivery_auth_proto_SignInUserInput__Output, _com_widedelivery_auth_proto_SignInUserResponse__Output>
  SignUpUser: MethodDefinition<_com_widedelivery_auth_proto_SignUpUserInput, _com_widedelivery_auth_proto_SignUpUserResponse, _com_widedelivery_auth_proto_SignUpUserInput__Output, _com_widedelivery_auth_proto_SignUpUserResponse__Output>
  UpdateUser: MethodDefinition<_com_widedelivery_auth_proto_UpdateUserInput, _com_widedelivery_auth_proto_UserResponse, _com_widedelivery_auth_proto_UpdateUserInput__Output, _com_widedelivery_auth_proto_UserResponse__Output>
}
