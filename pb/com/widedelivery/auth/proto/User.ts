// Original file: protos/user.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../google/protobuf/Timestamp';

export interface User {
  'id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'role'?: (string);
  'phone_number'?: (string);
  'provider'?: (string);
  'photo'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface User__Output {
  'id': (string);
  'name': (string);
  'email': (string);
  'role': (string);
  'phone_number': (string);
  'provider': (string);
  'photo': (string);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
