// Original file: protos/driver.proto

import type { Truck as _auth_Truck, Truck__Output as _auth_Truck__Output } from '../auth/Truck';

export interface Driver {
  'driverId'?: (string);
  'userId'?: (string);
  'mayBeLoader'?: (boolean);
  'searchRadius'?: (number);
  'truck'?: (_auth_Truck | null);
}

export interface Driver__Output {
  'driverId': (string);
  'userId': (string);
  'mayBeLoader': (boolean);
  'searchRadius': (number);
  'truck': (_auth_Truck__Output | null);
}
