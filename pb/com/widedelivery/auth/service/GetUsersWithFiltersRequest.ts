// Original file: protos/services.proto


export interface GetUsersWithFiltersRequest {
  'id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'phone_number'?: (string);
  'provider'?: (string);
  'role'?: (string);
  'photo'?: (string);
  'created_at_before'?: (string);
  'created_at_after'?: (string);
  'sort'?: (string);
  'sort_direction'?: (string);
  'limit'?: (number);
  'offset'?: (number);
}

export interface GetUsersWithFiltersRequest__Output {
  'id': (string);
  'name': (string);
  'email': (string);
  'phone_number': (string);
  'provider': (string);
  'role': (string);
  'photo': (string);
  'created_at_before': (string);
  'created_at_after': (string);
  'sort': (string);
  'sort_direction': (string);
  'limit': (number);
  'offset': (number);
}
