interface Address {
  street: string
  neighborhood: string
  number: number
  latitude: number
  longitude: number
}

export interface Organization {
  id?: string;
  name: string
  email: string
  cep: number
  address: Address
  phone: number
  password: string
}

export interface OrganizationsRepository {
  create(data: Organization): Promise<Organization>
}