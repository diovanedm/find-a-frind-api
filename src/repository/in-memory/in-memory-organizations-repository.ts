import { randomUUID } from "node:crypto";
import { Organization, OrganizationsRepository } from "../organizations-repository";

export class InMemoryOrganizationsRepository implements OrganizationsRepository {
  private organizations: Organization[] = []

  async create(data: Organization) {
    const newOrganization = { ...data, id: randomUUID() }
    this.organizations.push(newOrganization)
    return newOrganization
  }

  async searchMany(query: string): Promise<Organization[]> {
    return this.organizations
      .filter((item) => item.address.city.includes(query))
  }

  async findById(id: string) {
    const organization = this.organizations.find((item) => item.id === id)

    if (!organization) {
      throw new Error("Organization not found")
    }

    return organization
  }

  async findByEmail(email: string) {
    const organization = this.organizations.find((item) => item.email === email) || null
    return organization
  }
}