import { randomUUID } from "node:crypto";
import { Pet, PetsRepository } from "../pets-repository";
import { Organization, OrganizationsRepository } from "../organizations-repository";

export class InMemoryOrganizationsRepository implements OrganizationsRepository{
  private organization: Organization[] = []

  async create(data: Organization){
    const newOrganization = {...data, id: randomUUID()}
    this.organization.push(newOrganization)
    return newOrganization
  } 
}