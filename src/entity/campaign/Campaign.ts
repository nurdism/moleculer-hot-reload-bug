import { CampaignContact } from './CampaignContact'
import { CampaignContactList } from './CampaignContactList'
import { CampaignContactMergetag } from './CampaignContactMergetag'
import { CampaignContactTag } from './CampaignContactTag'
import { CampaignSequenceTemplate } from './CampaignSequenceTemplate'
import { CampaignSequenceItem } from './CampaignSequenceItem'
import { Organization } from '../organization/Organization'

export class Campaign {
  organization = new Organization()
  campaign_contacts = new CampaignContact()
  campaign_contact_lists = new CampaignContactList()
  campaign_contact_mergetags = new CampaignContactMergetag()
  campaign_contact_tags = new CampaignContactTag()
  campaign_sequence_templates = new CampaignSequenceTemplate()
  campaign_sequence_items = new CampaignSequenceItem()
}
