import { Template } from './Template'
import { TemplateCategoryRelation } from './TemplateCategoryRelation'
import { Application } from '../application/Application'
import { Organization } from '../organization/Organization'

export class TemplateCategory {
  application = new Application()
  organization = new Organization()
  templates = new Template()
  template_category_relations = new TemplateCategoryRelation()
}
