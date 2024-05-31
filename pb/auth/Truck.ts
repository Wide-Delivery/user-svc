// Original file: protos/truck.proto

import type { TruckType as _auth_TruckType, TruckType__Output as _auth_TruckType__Output } from '../auth/TruckType';

export interface Truck {
  'truckBrand'?: (string);
  'truckModel'?: (string);
  'truckPlate'?: (string);
  'truckSerialNumber'?: (string);
  'truckColor'?: (string);
  'truckType'?: (_auth_TruckType);
  'freeSpaceLength'?: (number | string);
  'freeSpaceWidth'?: (number | string);
  'freeSpaceHeight'?: (number | string);
  'transportationsCount'?: (number);
  'isAvailableNow'?: (boolean);
}

export interface Truck__Output {
  'truckBrand': (string);
  'truckModel': (string);
  'truckPlate': (string);
  'truckSerialNumber': (string);
  'truckColor': (string);
  'truckType': (_auth_TruckType__Output);
  'freeSpaceLength': (number);
  'freeSpaceWidth': (number);
  'freeSpaceHeight': (number);
  'transportationsCount': (number);
  'isAvailableNow': (boolean);
}
