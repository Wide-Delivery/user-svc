// Original file: protos/truck.proto


export interface TruckInput {
  'truck_brand'?: (string);
  'truck_model'?: (string);
  'truck_plate'?: (string);
  'truck_serial_number'?: (string);
  'truck_color'?: (string);
  'ree_space_length'?: (number | string);
  'ree_space_width'?: (number | string);
  'ree_space_height'?: (number | string);
}

export interface TruckInput__Output {
  'truck_brand': (string);
  'truck_model': (string);
  'truck_plate': (string);
  'truck_serial_number': (string);
  'truck_color': (string);
  'ree_space_length': (number);
  'ree_space_width': (number);
  'ree_space_height': (number);
}
