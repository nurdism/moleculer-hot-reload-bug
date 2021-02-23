import { Contact } from './Contact'
import { ContactPipeline } from './ContactPipeline'
import { ContactPipelineColumn } from './ContactPipelineColumn'

export class ContactPipelineColumnRelation {
  contact = new Contact()
  contact_pipeline = new ContactPipeline()
  contact_pipeline_column = new ContactPipelineColumn()
}
