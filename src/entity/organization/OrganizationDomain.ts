import { Organization } from './Organization'
import { ApplicationDomain } from '../application/ApplicationDomain'
import { Domain } from '../domain/Domain'

export class OrganizationDomain {
  domain = new Domain()
  organization = new Organization()
  application_domain = new ApplicationDomain()
}
