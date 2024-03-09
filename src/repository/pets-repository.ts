export interface Pet {
  id?: string
  name: string
  about: string
  age: number
  size: number
  enviromentSize: number
  energyLevel: number
  independenceLevel: number
  requisites: string[]

  entityId?: string | null
}

export interface PetsRepository {
  create(data: Pet): Promise<Pet>
  findById(id: string): Promise<Pet>
  findByEntityId(entityId: string): Promise<Pet[]>
} 