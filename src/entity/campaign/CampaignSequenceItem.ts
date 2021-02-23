import { Campaign } from './Campaign'
import { CampaignSequenceTemplate } from './CampaignSequenceTemplate'
import { Contact } from '../contact/Contact'
import { Message } from '../message/Message'

export class CampaignSequenceItem {
  campaign = new Campaign()
  campaign_sequence_template = new CampaignSequenceTemplate()
  contact = new Contact()
  message = new Message()
}
