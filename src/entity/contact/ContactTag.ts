import { ContactTagRelation } from './ContactTagRelation'
import { CampaignContactTag } from '../campaign/CampaignContactTag'
import { Organization } from '../organization/Organization'
import { JobImportContactTag } from '../job/JobImportContactTag'

export class ContactTag {
  organization = new Organization()
  contact_tag_relations = new ContactTagRelation()
  job_import_contact_tags = new JobImportContactTag()
  campaign_contact_tags = new CampaignContactTag()
}
