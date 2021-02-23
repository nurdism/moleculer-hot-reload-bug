import { ApplicationDomain } from './ApplicationDomain'
import { ApplicationMedia } from './ApplicationMedia'
import { Document } from '../document/Document'
import { Domain } from '../domain/Domain'
import { Message } from '../message/Message'
import { Organization } from '../organization/Organization'
import { Template } from '../template/Template'
import { TemplateCategory } from '../template/TemplateCategory'
import { TemplateTag } from '../template/TemplateTag'
import { User } from '../user/User'
import { UserActivity } from '../user/UserActivity'
import { UserEmailAddress } from '../user/UserEmailAddress'

export class Application {
  application_domains = new ApplicationDomain()
  application_media = new ApplicationMedia()
  domains = new Domain()
  documents = new Document()
  messages = new Message()
  organizations = new Organization()
  templates = new Template()
  template_tags = new TemplateTag()
  template_categories = new TemplateCategory()
  users = new User()
  user_email_addresses = new UserEmailAddress()
  user_activity = new UserActivity()
}
