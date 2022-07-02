import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TypeDocumentTb extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  NameTypeDocument: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TypeDocumentTb>) {
    super(data);
  }
}

export interface TypeDocumentTbRelations {
  // describe navigational properties here
}

export type TypeDocumentTbWithRelations = TypeDocumentTb & TypeDocumentTbRelations;
