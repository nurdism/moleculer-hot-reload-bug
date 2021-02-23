import { Application } from './Application'
import { Domain } from '../domain/Domain'
import { OrganizationDomain } from '../organization/OrganizationDomain'

export class ApplicationDomain {
  domain = new Domain()
  application = new Application()
  organization_domains = new OrganizationDomain()
}
