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
import {AppUserTb} from '../models';
import {AppUserTbRepository} from '../repositories';

export class AppUserController {
  constructor(
    @repository(AppUserTbRepository)
    public appUserTbRepository : AppUserTbRepository,
  ) {}

  @post('/user')
  @response(200, {
    description: 'AppUserTb model instance',
    content: {'application/json': {schema: getModelSchemaRef(AppUserTb)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AppUserTb, {
            title: 'NewAppUserTb',
            exclude: ['id'],
          }),
        },
      },
    })
    appUserTb: Omit<AppUserTb, 'id'>,
  ): Promise<AppUserTb> {
    return this.appUserTbRepository.create(appUserTb);
  }

  @get('/user')
  @response(200, {
    description: 'Array of AppUserTb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AppUserTb, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AppUserTb) filter?: Filter<AppUserTb>,
  ): Promise<AppUserTb[]> {
    return this.appUserTbRepository.find(filter);
  }

  @get('/user/{id}')
  @response(200, {
    description: 'AppUserTb model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AppUserTb, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AppUserTb, {exclude: 'where'}) filter?: FilterExcludingWhere<AppUserTb>
  ): Promise<AppUserTb> {
    return this.appUserTbRepository.findById(id, filter);
  }

  @put('/user/{id}')
  @response(204, {
    description: 'AppUserTb PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() appUserTb: AppUserTb,
  ): Promise<void> {
    await this.appUserTbRepository.replaceById(id, appUserTb);
  }

  @del('/user/{id}')
  @response(204, {
    description: 'AppUserTb DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.appUserTbRepository.deleteById(id);
  }
}
