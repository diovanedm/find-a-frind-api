import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryOrganizationsRepository } from "../repository/in-memory/in-memory-organizations-repository";
import { InMemoryPetsRepository } from "../repository/in-memory/in-memory-pets-repository";
import { LinkPetInOrganizationUseCase } from "./link-pet-in-organization";

let petsRepository:InMemoryPetsRepository
let organizationsRepository :InMemoryOrganizationsRepository
let sut:LinkPetInOrganizationUseCase

describe("Link Pet In Organization", () =>   {
  beforeEach(() => {
     petsRepository = new InMemoryPetsRepository();
     organizationsRepository = new InMemoryOrganizationsRepository();
     sut = new LinkPetInOrganizationUseCase(petsRepository, organizationsRepository);
  });

  it("should be able to link pet in organization", async () => {
    const org = await organizationsRepository.create({
      address: {
        cep: 30830280,
        street: 'Rua Coronel José Soares',
        city: 'bh'
      },
      email: 'diovane.dm@gmail.com',
      name: 'Diovane Maia Soares',
      password: 'diovane98',
      phone: 31971187697
    })

    const pet = await petsRepository.create({
      name: 'Floquinho',
      about: 'Cachorro muito docil e brincalhão',
      age: 4,
      energyLevel: 1,
      independenceLevel: 1,
      enviromentSize: 3,
      size: 1,
      requisites: ['vacina', 'castrado'],
    })

    await sut.execute(pet.id, org.id)

    expect(petsRepository.pets[0].entityId).toEqual(org.id)
  })
});
