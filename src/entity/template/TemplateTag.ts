import { Template } from './Template'
import { TemplateTagRelation } from './TemplateTagRelation'
import { Application } from '../application/Application'
import { Organization } from '../organization/Organization'

export class TemplateTag {
  application = new Application()
  organization = new Organization()
  templates = new Template()
  template_tag_relations = new TemplateTagRelation()
}
