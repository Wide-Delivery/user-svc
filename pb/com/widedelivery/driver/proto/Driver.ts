// Original file: protos/driver.proto

import type { Truck as _com_widedelivery_driver_proto_Truck, Truck__Output as _com_widedelivery_driver_proto_Truck__Output } from '../../../../com/widedelivery/driver/proto/Truck';

export interface Driver {
  'driver_id'?: (string);
  'user_id'?: (string);
  'may_be_loader'?: (boolean);
  'search_radius'?: (number);
  'truck'?: (_com_widedelivery_driver_proto_Truck | null);
}

export interface Driver__Output {
  'driver_id': (string);
  'user_id': (string);
  'may_be_loader': (boolean);
  'search_radius': (number);
  'truck': (_com_widedelivery_driver_proto_Truck__Output | null);
}
