import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources/mongo.datasource';
import {UserDocumentTb, UserDocumentTbRelations} from '../models';

export class UserDocumentTbRepository extends DefaultCrudRepository<
  UserDocumentTb,
  typeof UserDocumentTb.prototype.id,
  UserDocumentTbRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(UserDocumentTb, dataSource);
  }
}
