import { Organization } from './Organization'
import { Contact } from '../contact/Contact'
import { User } from '../user/User'

export class OrganizationMember {
  organization = new Organization()
  user = new User()
  contact = new Contact()
}
