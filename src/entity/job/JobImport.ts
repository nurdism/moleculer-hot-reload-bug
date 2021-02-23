import { JobImportRow } from './JobImportRow'
import { JobImportContactList } from './JobImportContactList'
import { JobImportContactMergetag } from './JobImportContactMergetag'
import { JobImportContactPipeline } from './JobImportContactPipeline'
import { JobImportContactTag } from './JobImportContactTag'
import { Organization } from '../organization/Organization'
import { Document } from '../document/Document'
import { User } from '../user/User'

export class JobImport {
  organization = new Organization()
  document = new Document()
  user = new User()
  job_import_contact_mergetags = new JobImportContactMergetag()
  job_import_contact_lists = new JobImportContactList()
  job_import_contact_pipelines = new JobImportContactPipeline()
  job_import_contact_tags = new JobImportContactTag()
  job_import_rows = new JobImportRow()
}
