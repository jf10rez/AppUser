import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources/mongo.datasource';
import {CountryTb, CountryTbRelations} from '../models';

export class CountryTbRepository extends DefaultCrudRepository<
  CountryTb,
  typeof CountryTb.prototype.id,
  CountryTbRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(CountryTb, dataSource);
  }
}
