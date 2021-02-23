import { Campaign } from './Campaign'
import { CampaignSequenceTemplateDocument } from './CampaignSequenceTemplateDocument'
import { CampaignSequenceItem } from './CampaignSequenceItem'

export class CampaignSequenceTemplate {
  campaign = new Campaign()
  campaign_sequence_template_documents = new CampaignSequenceTemplateDocument()
  campaign_sequence_items = new CampaignSequenceItem()
}
