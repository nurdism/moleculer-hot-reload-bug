import { OrganizationDomain } from './OrganizationDomain'
import { OrganizationInvite } from './OrganizationInvite'
import { OrganizationMedia } from './OrganizationMedia'
import { OrganizationMember } from './OrganizationMember'
import { Application } from '../application/Application'
import { Campaign } from '../campaign/Campaign'
import { Document } from '../document/Document'
import { Domain } from '../domain/Domain'
import { Template } from '../template/Template'
import { TemplateCategory } from '../template/TemplateCategory'
import { TemplateTag } from '../template/TemplateTag'
import { Contact } from '../contact/Contact'
import { ContactAddress } from '../contact/ContactAddress'
import { ContactEmailAddress } from '../contact/ContactEmailAddress'
import { ContactPhoneNumber } from '../contact/ContactPhoneNumber'
import { ContactList } from '../contact/ContactList'
import { ContactMergetag } from '../contact/ContactMergetag'
import { ContactPipeline } from '../contact/ContactPipeline'
import { ContactTag } from '../contact/ContactTag'
import { JobImport } from '../job/JobImport'
import { Message } from '../message/Message'
import { User } from '../user/User'

export class Organization {
  application = new Application()
  organization_media = new OrganizationMedia()
  members = new User()
  organization_members = new OrganizationMember()
  organization_domains = new OrganizationDomain()
  organization_invites = new OrganizationInvite()
  campaigns = new Campaign()
  contacts = new Contact()
  contact_addresses = new ContactAddress()
  contact_email_addresses = new ContactEmailAddress()
  contact_phone_numbers = new ContactPhoneNumber()
  contact_lists = new ContactList()
  contact_mergetags = new ContactMergetag()
  contact_pipelines = new ContactPipeline()
  contact_tags = new ContactTag()
  documents = new Document()
  domains = new Domain()
  job_imports = new JobImport()
  messages = new Message()
  templates = new Template()
  template_categories = new TemplateCategory()
  template_tags = new TemplateTag()
}
