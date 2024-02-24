import { randomUUID } from "node:crypto";
import { InMemoryPetsRepository } from "../repository/in-memory/in-memory-pets-repository";
import { CreatePetUseCase } from "./create-pet";
import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryOrganizationsRepository } from "../repository/in-memory/in-memory-organizations-repository";
import { CreateOrganizationUseCase } from "./create-organization";

let organizationRepository:InMemoryOrganizationsRepository
let sut:CreateOrganizationUseCase

describe("Create Organization Use Case", () =>   {
  beforeEach(() => {
     organizationRepository = new InMemoryOrganizationsRepository();
     sut = new CreateOrganizationUseCase(organizationRepository);
  });

  it("should be able to create a organization", async () => {
    const organization = await sut.execute({
      address: {
        latitude: -19.9027336617215, 
        longitude: -44.005445959920394,
        neighborhood: 'Glória',
        number: 282,
        street: 'Rua Coronel José Soares'
      },
      cep: 30830280,
      email: 'diovane.dm@gmail.com',
      name: 'Diovane Maia Soares',
      password: 'diovane98',
      phone: 31971187697
    })

    expect(organization.id)
  })
});
