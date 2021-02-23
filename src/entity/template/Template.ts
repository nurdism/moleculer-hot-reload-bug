import { TemplateCategory } from './TemplateCategory'
import { TemplateCategoryRelation } from './TemplateCategoryRelation'
import { TemplateDocument } from './TemplateDocument'
import { TemplateTag } from './TemplateTag'
import { TemplateTagRelation } from './TemplateTagRelation'
import { Application } from '../application/Application'
import { Organization } from '../organization/Organization'

export class Template {
  application = new Application()
  organization = new Organization()
  template_categories = new TemplateCategory()
  template_category_relations = new TemplateCategoryRelation()
  template_tags = new TemplateTag()
  template_tag_relations = new TemplateTagRelation()
  template_documents = new TemplateDocument()
}
