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
import {TypeDocumentTb} from '../models';
import {TypeDocumentTbRepository} from '../repositories';

export class TypeDocumentController {
  constructor(
    @repository(TypeDocumentTbRepository)
    public typeDocumentTbRepository : TypeDocumentTbRepository,
  ) {}

  @post('/typedocument')
  @response(200, {
    description: 'TypeDocumentTb model instance',
    content: {'application/json': {schema: getModelSchemaRef(TypeDocumentTb)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TypeDocumentTb, {
            title: 'NewTypeDocumentTb',
            exclude: ['id'],
          }),
        },
      },
    })
    typeDocumentTb: Omit<TypeDocumentTb, 'id'>,
  ): Promise<TypeDocumentTb> {
    return this.typeDocumentTbRepository.create(typeDocumentTb);
  }

  @get('/typedocument')
  @response(200, {
    description: 'Array of TypeDocumentTb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TypeDocumentTb, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TypeDocumentTb) filter?: Filter<TypeDocumentTb>,
  ): Promise<TypeDocumentTb[]> {
    return this.typeDocumentTbRepository.find(filter);
  }

  @get('/typedocument/{id}')
  @response(200, {
    description: 'TypeDocumentTb model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TypeDocumentTb, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TypeDocumentTb, {exclude: 'where'}) filter?: FilterExcludingWhere<TypeDocumentTb>
  ): Promise<TypeDocumentTb> {
    return this.typeDocumentTbRepository.findById(id, filter);
  }

  @put('/typedocument/{id}')
  @response(204, {
    description: 'TypeDocumentTb PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() typeDocumentTb: TypeDocumentTb,
  ): Promise<void> {
    await this.typeDocumentTbRepository.replaceById(id, typeDocumentTb);
  }

  @del('/typedocument/{id}')
  @response(204, {
    description: 'TypeDocumentTb DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.typeDocumentTbRepository.deleteById(id);
  }
}
