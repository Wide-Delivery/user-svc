// Original file: protos/services.proto

import type { User as _auth_User, User__Output as _auth_User__Output } from '../auth/User';

export interface GetUsersWithFiltersResponse {
  'users'?: (_auth_User)[];
}

export interface GetUsersWithFiltersResponse__Output {
  'users': (_auth_User__Output)[];
}
