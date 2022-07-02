import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CountryTb extends Entity {
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
  CountryCode: string;

  @property({
    type: 'string',
    required: true,
  })
  CountryName: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CountryTb>) {
    super(data);
  }
}

export interface CountryTbRelations {
  // describe navigational properties here
}

export type CountryTbWithRelations = CountryTb & CountryTbRelations;
