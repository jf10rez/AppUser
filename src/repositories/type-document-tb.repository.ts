import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources/mongo.datasource';
import {TypeDocumentTb, TypeDocumentTbRelations} from '../models';

export class TypeDocumentTbRepository extends DefaultCrudRepository<
  TypeDocumentTb,
  typeof TypeDocumentTb.prototype.id,
  TypeDocumentTbRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(TypeDocumentTb, dataSource);
  }
}
