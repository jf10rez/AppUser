import {Entity, model, property} from '@loopback/repository';
import {AppUserTb} from './app-user-tb.model';
import {TypeDocumentTb} from './type-document-tb.model';

@model({settings: {strict: false}})
export class UserDocumentTb extends Entity {
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
  Document: string;

  @property({
    type: 'string',
    required: true,
  })
  PlaceExpedition: string;

  @property({
    type: 'date',
    required: true,
  })
  DateExpedition: string;

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
    required: true,
    references: {
      model: () => TypeDocumentTb,
      property: 'id',
    },
    mongodb: {dataType: 'ObjectID'}
  })
  TypeDocumentId: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserDocumentTb>) {
    super(data);
  }
}

export interface UserDocumentTbRelations {
  // describe navigational properties here
}

export type UserDocumentTbWithRelations = UserDocumentTb & UserDocumentTbRelations;
