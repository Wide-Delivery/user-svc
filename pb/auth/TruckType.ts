// Original file: protos/truck.proto

export const TruckType = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
} as const;

export type TruckType =
  | 'SMALL'
  | 0
  | 'MEDIUM'
  | 1
  | 'LARGE'
  | 2

export type TruckType__Output = typeof TruckType[keyof typeof TruckType]
