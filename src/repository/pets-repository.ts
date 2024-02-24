export interface Pet {
  id?: string
  name: string
  about: string
  age: number
  size: number
  enviromentSize: number
  energyLevel: number
  independenceLevel: number

  organizationId: string
}

export interface PetsRepository {
  create(data: Pet): Promise<Pet>
}