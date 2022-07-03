import {Entity, model, property} from '@loopback/repository';
import {AppUserTb} from './app-user-tb.model';
import {CountryTb} from './country-tb.model';

@model({settings: {strict: false}})
export class ContactInfoTb extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    references: {
      model: () => AppUserTb,
      property: 'id',
    },
    mongodb: {dataType: 'ObjectID'}
  })
  UserId: string;

  @property({
    type: 'string',
  })
  Address?: string;

  @property({
    type: 'string',
    required: true,
    references: {
      model: () => CountryTb,
      property: 'id',
    },
    mongodb: {dataType: 'ObjectID'}
  })
  CountryId: string;

  @property({
    type: 'string',
    required: true,
  })
  City: string;

  @property({
    type: 'string',
  })
  Phone?: string;

  @property({
    type: 'string',
  })
  CelPhone?: string;

  @property({
    type: 'string',
    required: true,
  })
  EmergencyName: string;

  @property({
    type: 'string',
    required: true,
  })
  EmergencyPhone: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ContactInfoTb>) {
    super(data);
  }
}

export interface ContactInfoTbRelations {
  // describe navigational properties here
}

export type ContactInfoTbWithRelations = ContactInfoTb & ContactInfoTbRelations;
