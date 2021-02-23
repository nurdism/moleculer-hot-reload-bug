import { DomainEmailAddress } from './DomainEmailAddress'
import { Application } from '../application/Application'
import { ApplicationDomain } from '../application/ApplicationDomain'
import { Organization } from '../organization/Organization'
import { OrganizationDomain } from '../organization/OrganizationDomain'

export class Domain {
  application = new Application()
  organization = new Organization()
  domain_email_addresses = new DomainEmailAddress()
  application_domains = new ApplicationDomain()
  organization_domains = new OrganizationDomain()
}
