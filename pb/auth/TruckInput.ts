// Original file: protos/truck.proto


export interface TruckInput {
  'truckBrand'?: (string);
  'truckModel'?: (string);
  'truckPlate'?: (string);
  'truckSerialNumber'?: (string);
  'truckColor'?: (string);
  'freeSpaceLength'?: (number | string);
  'freeSpaceWidth'?: (number | string);
  'freeSpaceHeight'?: (number | string);
}

export interface TruckInput__Output {
  'truckBrand': (string);
  'truckModel': (string);
  'truckPlate': (string);
  'truckSerialNumber': (string);
  'truckColor': (string);
  'freeSpaceLength': (number);
  'freeSpaceWidth': (number);
  'freeSpaceHeight': (number);
}
