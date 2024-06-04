// Original file: protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetMeInput as _auth_GetMeInput, GetMeInput__Output as _auth_GetMeInput__Output } from '../auth/GetMeInput';
import type { GetUserByIdInput as _auth_GetUserByIdInput, GetUserByIdInput__Output as _auth_GetUserByIdInput__Output } from '../auth/GetUserByIdInput';
import type { GetUsersWithFiltersRequest as _auth_GetUsersWithFiltersRequest, GetUsersWithFiltersRequest__Output as _auth_GetUsersWithFiltersRequest__Output } from '../auth/GetUsersWithFiltersRequest';
import type { GetUsersWithFiltersResponse as _auth_GetUsersWithFiltersResponse, GetUsersWithFiltersResponse__Output as _auth_GetUsersWithFiltersResponse__Output } from '../auth/GetUsersWithFiltersResponse';
import type { OAuthSignInInput as _auth_OAuthSignInInput, OAuthSignInInput__Output as _auth_OAuthSignInInput__Output } from '../auth/OAuthSignInInput';
import type { RefreshTokenInput as _auth_RefreshTokenInput, RefreshTokenInput__Output as _auth_RefreshTokenInput__Output } from '../auth/RefreshTokenInput';
import type { RefreshTokenResponse as _auth_RefreshTokenResponse, RefreshTokenResponse__Output as _auth_RefreshTokenResponse__Output } from '../auth/RefreshTokenResponse';
import type { SignInUserInput as _auth_SignInUserInput, SignInUserInput__Output as _auth_SignInUserInput__Output } from '../auth/SignInUserInput';
import type { SignInUserResponse as _auth_SignInUserResponse, SignInUserResponse__Output as _auth_SignInUserResponse__Output } from '../auth/SignInUserResponse';
import type { SignUpUserInput as _auth_SignUpUserInput, SignUpUserInput__Output as _auth_SignUpUserInput__Output } from '../auth/SignUpUserInput';
import type { SignUpUserResponse as _auth_SignUpUserResponse, SignUpUserResponse__Output as _auth_SignUpUserResponse__Output } from '../auth/SignUpUserResponse';
import type { UserResponse as _auth_UserResponse, UserResponse__Output as _auth_UserResponse__Output } from '../auth/UserResponse';

export interface AuthServiceClient extends grpc.Client {
  GetMe(argument: _auth_GetMeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _auth_GetMeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _auth_GetMeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _auth_GetMeInput, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _auth_GetMeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _auth_GetMeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _auth_GetMeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _auth_GetMeInput, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserById(argument: _auth_GetUserByIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _auth_GetUserByIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _auth_GetUserByIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _auth_GetUserByIdInput, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _auth_GetUserByIdInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _auth_GetUserByIdInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _auth_GetUserByIdInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _auth_GetUserByIdInput, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUsersWithFilters(argument: _auth_GetUsersWithFiltersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  GetUsersWithFilters(argument: _auth_GetUsersWithFiltersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  GetUsersWithFilters(argument: _auth_GetUsersWithFiltersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  GetUsersWithFilters(argument: _auth_GetUsersWithFiltersRequest, callback: grpc.requestCallback<_auth_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithFilters(argument: _auth_GetUsersWithFiltersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithFilters(argument: _auth_GetUsersWithFiltersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithFilters(argument: _auth_GetUsersWithFiltersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  getUsersWithFilters(argument: _auth_GetUsersWithFiltersRequest, callback: grpc.requestCallback<_auth_GetUsersWithFiltersResponse__Output>): grpc.ClientUnaryCall;
  
  OAuthSignIn(argument: _auth_OAuthSignInInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  OAuthSignIn(argument: _auth_OAuthSignInInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  OAuthSignIn(argument: _auth_OAuthSignInInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  OAuthSignIn(argument: _auth_OAuthSignInInput, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  oAuthSignIn(argument: _auth_OAuthSignInInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  oAuthSignIn(argument: _auth_OAuthSignInInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  oAuthSignIn(argument: _auth_OAuthSignInInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  oAuthSignIn(argument: _auth_OAuthSignInInput, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
  RefreshToken(argument: _auth_RefreshTokenInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _auth_RefreshTokenInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _auth_RefreshTokenInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _auth_RefreshTokenInput, callback: grpc.requestCallback<_auth_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshTokenInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshTokenInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshTokenInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshTokenInput, callback: grpc.requestCallback<_auth_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  
  SignInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserInput, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
  SignUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, callback: grpc.requestCallback<_auth_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GetMe: grpc.handleUnaryCall<_auth_GetMeInput__Output, _auth_UserResponse>;
  
  GetUserById: grpc.handleUnaryCall<_auth_GetUserByIdInput__Output, _auth_UserResponse>;
  
  GetUsersWithFilters: grpc.handleUnaryCall<_auth_GetUsersWithFiltersRequest__Output, _auth_GetUsersWithFiltersResponse>;
  
  OAuthSignIn: grpc.handleUnaryCall<_auth_OAuthSignInInput__Output, _auth_SignInUserResponse>;
  
  RefreshToken: grpc.handleUnaryCall<_auth_RefreshTokenInput__Output, _auth_RefreshTokenResponse>;
  
  SignInUser: grpc.handleUnaryCall<_auth_SignInUserInput__Output, _auth_SignInUserResponse>;
  
  SignUpUser: grpc.handleUnaryCall<_auth_SignUpUserInput__Output, _auth_SignUpUserResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  GetMe: MethodDefinition<_auth_GetMeInput, _auth_UserResponse, _auth_GetMeInput__Output, _auth_UserResponse__Output>
  GetUserById: MethodDefinition<_auth_GetUserByIdInput, _auth_UserResponse, _auth_GetUserByIdInput__Output, _auth_UserResponse__Output>
  GetUsersWithFilters: MethodDefinition<_auth_GetUsersWithFiltersRequest, _auth_GetUsersWithFiltersResponse, _auth_GetUsersWithFiltersRequest__Output, _auth_GetUsersWithFiltersResponse__Output>
  OAuthSignIn: MethodDefinition<_auth_OAuthSignInInput, _auth_SignInUserResponse, _auth_OAuthSignInInput__Output, _auth_SignInUserResponse__Output>
  RefreshToken: MethodDefinition<_auth_RefreshTokenInput, _auth_RefreshTokenResponse, _auth_RefreshTokenInput__Output, _auth_RefreshTokenResponse__Output>
  SignInUser: MethodDefinition<_auth_SignInUserInput, _auth_SignInUserResponse, _auth_SignInUserInput__Output, _auth_SignInUserResponse__Output>
  SignUpUser: MethodDefinition<_auth_SignUpUserInput, _auth_SignUpUserResponse, _auth_SignUpUserInput__Output, _auth_SignUpUserResponse__Output>
}
