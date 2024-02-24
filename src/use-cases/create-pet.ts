import { Pet, PetsRepository } from "../repository/pets-repository";

type PetUseCaseRequest = Pet
type PetUseCaseResponse = Pet

export class CreatePetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(pet: PetUseCaseRequest): Promise<PetUseCaseResponse> {
    const createPet = await this.petsRepository.create(pet)

    return createPet
  }
}