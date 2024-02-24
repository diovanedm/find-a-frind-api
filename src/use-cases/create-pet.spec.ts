import { randomUUID } from "node:crypto";
import { InMemoryPetsRepository } from "../repository/in-memory/in-memory-pets-repository";
import { CreatePetUseCase } from "./create-pet";
import {beforeEach, describe, expect, it} from 'vitest'

let petsRepository:InMemoryPetsRepository
let sut:CreatePetUseCase

describe("Create Pet Use Case", () =>   {
  beforeEach(() => {
     petsRepository = new InMemoryPetsRepository();
     sut = new CreatePetUseCase(petsRepository);
  });

  it("should be able to create pet", async () => {
    const pet = await sut.execute({
      name: 'Floquinho',
      about: 'Cachorro muito docil e brincalhão',
      age: 4,
      energyLevel: 1,
      independenceLevel: 1,
      enviromentSize: 3,
      size: 1,
      organizationId: randomUUID()
    })
    expect(pet.id).toEqual(expect.any(String))
  })
});
