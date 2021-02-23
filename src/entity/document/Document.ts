import { Application } from '../application/Application'
import { ApplicationMedia } from '../application/ApplicationMedia'
import { CampaignSequenceTemplateDocument } from '../campaign/CampaignSequenceTemplateDocument'
import { Organization } from '../organization/Organization'
import { OrganizationMedia } from '../organization/OrganizationMedia'
import { User } from '../user/User'
import { MessageDocument } from '../message/MessageDocument'
import { TemplateDocument } from '../template/TemplateDocument'
import { JobImport } from '../job/JobImport'

export class Document {
  application = new Application()
  organization = new Organization()
  user = new User()
  application_media = new ApplicationMedia()
  campaign_sequence_template_documents = new CampaignSequenceTemplateDocument()
  job_imports = new JobImport()
  message_documents = new MessageDocument()
  organization_media = new OrganizationMedia()
  template_documents = new TemplateDocument()
}
