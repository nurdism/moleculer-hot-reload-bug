import { MessageDocument } from './MessageDocument'
import { CampaignSequenceItem } from '../campaign/CampaignSequenceItem'
import { Contact } from '../contact/Contact'
import { ContactPhoneNumber } from '../contact/ContactPhoneNumber'
import { ContactEmailAddress } from '../contact/ContactEmailAddress'
import { Document } from '../document/Document'
import { DomainEmailAddress } from '../domain/DomainEmailAddress'
import { Organization } from '../organization/Organization'

export class Message {
  organization = new Organization()
  domain_email_address = new DomainEmailAddress()
  contact = new Contact()
  contact_email_address = new ContactEmailAddress()
  contact_phone_number = new ContactPhoneNumber()
  documents = new Document()
  message_documents = new MessageDocument()
  campaign_sequence_items = new CampaignSequenceItem()
}
