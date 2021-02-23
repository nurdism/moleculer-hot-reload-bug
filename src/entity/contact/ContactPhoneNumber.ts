import { Contact } from './Contact'
import { Organization } from '../organization/Organization'
import { Message } from '../message/Message'

export class ContactPhoneNumber {
  organization = new Organization()
  contact = new Contact()
  messages = new Message()
}
