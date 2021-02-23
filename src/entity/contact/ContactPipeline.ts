import { ContactPipelineColumn } from './ContactPipelineColumn'
import { ContactPipelineColumnRelation } from './ContactPipelineColumnRelation'
import { Organization } from '../organization/Organization'
import { JobImportContactPipeline } from '../job/JobImportContactPipeline'

export class ContactPipeline {
  organization = new Organization()
  contact_pipline_columns = new ContactPipelineColumn()
  contact_pipline_column_relations = new ContactPipelineColumnRelation()
  job_import_contact_pipelines = new JobImportContactPipeline()
}
