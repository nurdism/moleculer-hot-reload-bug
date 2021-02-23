import { UserActivity } from './UserActivity'
import { UserEmailAddress } from './UserEmailAddress'
import { Application } from '../application/Application'
import { Organization } from '../organization/Organization'
import { OrganizationMember } from '../organization/OrganizationMember'
import { Document } from '../document/Document'
import { JobImport } from '../job/JobImport'

export class User {
  application = new Application()
  user_email_addresses = new UserEmailAddress()
  user_activity = new UserActivity()
  organization_memberships = new OrganizationMember()
  documents = new Document()
  job_imports = new JobImport()
  organizations = new Organization()
}
