import {
  Filter,
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, post, requestBody,
  response
} from '@loopback/rest';
import {ContactInfoTb} from '../models';
import {ContactInfoTbRepository} from '../repositories';

export class ContactInfoController {
  constructor(
    @repository(ContactInfoTbRepository)
    public contactInfoTbRepository : ContactInfoTbRepository,
  ) {}

  @post('/contact')
  @response(200, {
    description: 'ContactInfoTb model instance',
    content: {'application/json': {schema: getModelSchemaRef(ContactInfoTb)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContactInfoTb, {
            title: 'NewContactInfoTb',
            exclude: ['id'],
          }),
        },
      },
    })
    contactInfoTb: Omit<ContactInfoTb, 'id'>,
  ): Promise<ContactInfoTb> {
    return this.contactInfoTbRepository.create(contactInfoTb);
  }

  @get('/contact')
  @response(200, {
    description: 'Array of ContactInfoTb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ContactInfoTb, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ContactInfoTb) filter?: Filter<ContactInfoTb>,
  ): Promise<ContactInfoTb[]> {
    return this.contactInfoTbRepository.find(filter);
  }

  @get('/contact/{id}')
  @response(200, {
    description: 'ContactInfoTb model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ContactInfoTb, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ContactInfoTb, {exclude: 'where'}) filter?: FilterExcludingWhere<ContactInfoTb>
  ): Promise<ContactInfoTb> {
    return this.contactInfoTbRepository.findById(id, filter);
  }

  @del('/contact/{id}')
  @response(204, {
    description: 'ContactInfoTb DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.contactInfoTbRepository.deleteById(id);
  }
}
