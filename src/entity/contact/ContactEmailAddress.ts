import { Contact } from './Contact'
import { Organization } from '../organization/Organization'
import { Message } from '../message/Message'

export class ContactEmailAddress {
  organization = new Organization()
  contact = new Contact()
  messages = new Message()
}
