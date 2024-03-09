import { randomUUID } from "node:crypto";
import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryOrganizationsRepository } from "../repository/in-memory/in-memory-organizations-repository";
import { InMemoryPetsRepository } from "../repository/in-memory/in-memory-pets-repository";
import { ListPetsUseCase } from "./list-pets";

let petsRepository:InMemoryPetsRepository
let organizationsRepository :InMemoryOrganizationsRepository
let sut:ListPetsUseCase

describe("List Pets Use Case", () =>   {
  beforeEach(() => {
     petsRepository = new InMemoryPetsRepository();
     organizationsRepository = new InMemoryOrganizationsRepository();
     sut = new ListPetsUseCase(petsRepository, organizationsRepository);
  });

  it("should be able to list pets", async () => {
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
 
    petsRepository.create({
      name: 'Floquinho',
      about: 'Cachorro muito docil e preguiçoso',
      age: 4,
      energyLevel: 1,
      independenceLevel: 1,
      enviromentSize: 3,
      size: 1,
      requisites: ['vacina', 'castrado'],
      entityId: org.id
    })

    petsRepository.create({
      name: 'Thor',
      about: 'Cachorro muito docil e brincalhão',
      age: 4,
      energyLevel: 1,
      independenceLevel: 1,
      enviromentSize: 3,
      size: 1,
      requisites: ['vacina', 'castrado'],
      entityId: org.id
    })

    const pets = await sut.execute('bh')
    expect(pets).toHaveLength(2)
  })
});
