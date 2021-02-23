import { ContactAddress } from './ContactAddress'
import { ContactEmailAddress } from './ContactEmailAddress'
import { ContactMergetagRelation } from './ContactMergetagRelation'
import { ContactPhoneNumber } from './ContactPhoneNumber'
import { ContactNote } from './ContactNote'
import { ContactListRelation } from './ContactListRelation'
import { ContactTagRelation } from './ContactTagRelation'
import { ContactPipelineColumnRelation } from './ContactPipelineColumnRelation'
import { Organization } from '../organization/Organization'
import { OrganizationMember } from '../organization/OrganizationMember'
import { CampaignContact } from '../campaign/CampaignContact'
import { CampaignSequenceItem } from '../campaign/CampaignSequenceItem'
import { Message } from '../message/Message'
import { JobImportRow } from '../job/JobImportRow'

export class Contact {
  organization = new Organization()
  contact_addresses = new ContactAddress()
  contact_email_addresses = new ContactEmailAddress()
  contact_phone_numbers = new ContactPhoneNumber()
  contact_notes = new ContactNote()
  contact_list_relations = new ContactListRelation()
  contact_tag_relations = new ContactTagRelation()
  contact_mergetag_relations = new ContactMergetagRelation()
  contact_pipline_column_relations = new ContactPipelineColumnRelation()
  messages = new Message()
  job_import_rows = new JobImportRow()
  campaign_contacts = new CampaignContact()
  campaign_sequence_items = new CampaignSequenceItem()
  organization_member = new OrganizationMember()
}
