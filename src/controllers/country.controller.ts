import {
  Filter,
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, post, put, requestBody,
  response
} from '@loopback/rest';
import {CountryTb} from '../models';
import {CountryTbRepository} from '../repositories';

export class CountryController {
  constructor(
    @repository(CountryTbRepository)
    public countryTbRepository : CountryTbRepository,
  ) {}

  @post('/country')
  @response(200, {
    description: 'CountryTb model instance',
    content: {'application/json': {schema: getModelSchemaRef(CountryTb)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CountryTb, {
            title: 'NewCountryTb',
            exclude: ['id'],
          }),
        },
      },
    })
    countryTb: Omit<CountryTb, 'id'>,
  ): Promise<CountryTb> {
    return this.countryTbRepository.create(countryTb);
  }

  @get('/country')
  @response(200, {
    description: 'Array of CountryTb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CountryTb, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CountryTb) filter?: Filter<CountryTb>,
  ): Promise<CountryTb[]> {
    return this.countryTbRepository.find(filter);
  }

  @get('/country/{id}')
  @response(200, {
    description: 'CountryTb model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CountryTb, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CountryTb, {exclude: 'where'}) filter?: FilterExcludingWhere<CountryTb>
  ): Promise<CountryTb> {
    return this.countryTbRepository.findById(id, filter);
  }

  @put('/country/{id}')
  @response(204, {
    description: 'CountryTb PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() countryTb: CountryTb,
  ): Promise<void> {
    await this.countryTbRepository.replaceById(id, countryTb);
  }

  @del('/country/{id}')
  @response(204, {
    description: 'CountryTb DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.countryTbRepository.deleteById(id);
  }
}
