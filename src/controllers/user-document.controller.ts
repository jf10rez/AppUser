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
import {UserDocumentTb} from '../models';
import {UserDocumentTbRepository} from '../repositories';

export class UserDocumentController {
  constructor(
    @repository(UserDocumentTbRepository)
    public userDocumentTbRepository : UserDocumentTbRepository,
  ) {}

  @post('/userDocument')
  @response(200, {
    description: 'UserDocumentTb model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserDocumentTb)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserDocumentTb, {
            title: 'NewUserDocumentTb',
            exclude: ['id'],
          }),
        },
      },
    })
    userDocumentTb: Omit<UserDocumentTb, 'id'>,
  ): Promise<UserDocumentTb> {
    return this.userDocumentTbRepository.create(userDocumentTb);
  }

  @get('/userDocument')
  @response(200, {
    description: 'Array of UserDocumentTb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserDocumentTb, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserDocumentTb) filter?: Filter<UserDocumentTb>,
  ): Promise<UserDocumentTb[]> {
    return this.userDocumentTbRepository.find(filter);
  }

  @get('/userDocument/{id}')
  @response(200, {
    description: 'UserDocumentTb model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserDocumentTb, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserDocumentTb, {exclude: 'where'}) filter?: FilterExcludingWhere<UserDocumentTb>
  ): Promise<UserDocumentTb> {
    return this.userDocumentTbRepository.findById(id, filter);
  }

  @put('/userDocument/{id}')
  @response(204, {
    description: 'UserDocumentTb PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userDocumentTb: UserDocumentTb,
  ): Promise<void> {
    await this.userDocumentTbRepository.replaceById(id, userDocumentTb);
  }

  @del('/userDocument/{id}')
  @response(204, {
    description: 'UserDocumentTb DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userDocumentTbRepository.deleteById(id);
  }
}
