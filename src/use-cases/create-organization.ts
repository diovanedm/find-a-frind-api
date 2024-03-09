import { Organization, OrganizationsRepository } from "../repository/organizations-repository";
import { hash } from 'bcryptjs'
type OrganizationUseCaseRequest = Organization
interface OrganizationUseCaseResponse {
  id: string
}

export class CreateOrganizationUseCase {
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute(organization: OrganizationUseCaseRequest): Promise<OrganizationUseCaseResponse> {
      const organizationWithSameEmail = await this.organizationsRepository.findByEmail(organization.email)

      if(organizationWithSameEmail) {
        throw new Error('Organization with same email already exists')
      }

      const passwordHash = await hash(organization.password, 6)

      const createOrganization = await this.organizationsRepository.create({
        ...organization,
        password: passwordHash
      })

      return {
        id: createOrganization.id!
      }
    
  }
}