import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources/mongo.datasource';
import {ContactInfoTb, ContactInfoTbRelations} from '../models';

export class ContactInfoTbRepository extends DefaultCrudRepository<
  ContactInfoTb,
  typeof ContactInfoTb.prototype.id,
  ContactInfoTbRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ContactInfoTb, dataSource);
  }
}
