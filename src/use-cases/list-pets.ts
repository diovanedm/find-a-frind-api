import { InMemoryOrganizationsRepository } from "../repository/in-memory/in-memory-organizations-repository";
import { InMemoryPetsRepository } from "../repository/in-memory/in-memory-pets-repository";
import { OrganizationsRepository } from "../repository/organizations-repository";
import { Pet, PetsRepository } from "../repository/pets-repository";

export interface ListPetsUseCaseRequest extends Pet {
  city: string
}
type ListPetsUseCaseResponse = Pet

export class ListPetsUseCase {
  constructor(private petsRepository: PetsRepository, private organizationsRepository: OrganizationsRepository) { }

  async execute(city: string) {
    const organizations = await this.organizationsRepository.searchMany(city)

    const pets = await Promise.all(organizations.map(async (organization) => {
      return await this.petsRepository.findByEntityId(organization.id!)
    }))

    return pets.flat()
  }
}