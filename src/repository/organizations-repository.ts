interface Address {
  cep: number
  street: string
  city: string
}

export interface Organization {
  id?: string;
  name: string
  email: string
  address: Address
  phone: number
  password: string
}

export interface OrganizationsRepository {
  create(data: Organization): Promise<Organization>
}