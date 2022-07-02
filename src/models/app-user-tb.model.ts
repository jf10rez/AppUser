import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class AppUserTb extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  LastName: string;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'boolean',
    required: true,
  })
  IsMilitar: boolean;

  @property({
    type: 'date',
  })
  TimeCreate?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  IsTemporal: boolean;

  @property({
    type: 'string',
    required: true,
  })
  Username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AppUserTb>) {
    super(data);
  }
}

export interface AppUserTbRelations {
  // describe navigational properties here
}

export type AppUserTbWithRelations = AppUserTb & AppUserTbRelations;
