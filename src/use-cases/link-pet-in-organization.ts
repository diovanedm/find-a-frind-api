import { OrganizationsRepository } from "../repository/organizations-repository";
import { PetsRepository } from "../repository/pets-repository";

export class LinkPetInOrganizationUseCase {
  constructor(private petsRepository: PetsRepository, private organizationsRepository: OrganizationsRepository) { }

  async execute(petId: string, organizationId: string) {
    const pet = await this.petsRepository.findById(petId)
    const organization = await this.organizationsRepository.findById(organizationId)

    pet.entityId = organization.id!
    await this.petsRepository.create(pet)
  }
}