import { Organization, OrganizationsRepository } from "../repository/organizations-repository";

type OrganizationUseCaseRequest = Organization
interface OrganizationUseCaseResponse {
  id: string
}

export class CreateOrganizationUseCase {
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute(organization: OrganizationUseCaseRequest): Promise<OrganizationUseCaseResponse> {
      const createOrganization = await this.organizationsRepository.create(organization)

      return {
        id: createOrganization.id!
      }
    
  }
}