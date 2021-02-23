import { ContactMergetagRelation } from './ContactMergetagRelation'
import { CampaignContactMergetag } from '../campaign/CampaignContactMergetag'
import { Organization } from '../organization/Organization'
import { JobImportContactMergetag } from '../job/JobImportContactMergetag'

export class ContactMergetag {
  organization = new Organization()
  contact_mergetag_relations = new ContactMergetagRelation()
  job_import_contact_mergetags = new JobImportContactMergetag()
  campaign_contact_mergetags = new CampaignContactMergetag()
}
