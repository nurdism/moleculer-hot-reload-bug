import { ContactListRelation } from './ContactListRelation'
import { CampaignContactList } from '../campaign/CampaignContactList'
import { Organization } from '../organization/Organization'
import { JobImportContactList } from '../job/JobImportContactList'

export class ContactList {
  organization = new Organization()
  contact_list_relations = new ContactListRelation()
  job_import_contact_lists = new JobImportContactList()
  campaign_contact_lists = new CampaignContactList()
}
