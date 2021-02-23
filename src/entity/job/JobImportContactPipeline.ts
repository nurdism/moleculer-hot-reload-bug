import { JobImport } from './JobImport'
import { ContactPipeline } from '../contact/ContactPipeline'

export class JobImportContactPipeline {
  job_import = new  JobImport()
  contact_pipeline = new ContactPipeline()
}
