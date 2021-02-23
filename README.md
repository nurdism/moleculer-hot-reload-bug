
# moleculer-hot-reload-bug

## Problem:
`hot-reload` middleware has a recursive function [processModule](https://github.com/moleculerjs/moleculer/blob/master/src/middlewares/hot-reload.js#L221) that does not catch all circular dependencies. I dont know where or how its not catching the circular dependencies.

**WARNING:** If you run moleculer-runner with the `--hot` option in this project, the process *will* hang and the thread will be locked until you kill it manually via a task manger.

Issue: [Circular dependency loop possible hot-reload middleware](https://github.com/moleculerjs/moleculer/issues/875)

This project has 98 circular dependencies:
```
1) entity/application/Application.ts > entity/application/ApplicationDomain.ts
2) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts
3) entity/application/ApplicationDomain.ts > entity/domain/Domain.ts
4) entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts
5) entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts
6) entity/campaign/CampaignContact.ts > entity/contact/Contact.ts
7) entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts
8) entity/contact/Contact.ts > entity/contact/ContactAddress.ts
9) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts
10) entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts
11) entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts
12) entity/contact/ContactAddress.ts > entity/organization/Organization.ts
13) entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactEmailAddress.ts
14) entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactEmailAddress.ts
15) entity/organization/Organization.ts > entity/contact/ContactEmailAddress.ts
16) entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/campaign/CampaignContactList.ts
17) entity/contact/ContactList.ts > entity/campaign/CampaignContactList.ts
18) entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/contact/ContactListRelation.ts
19) entity/contact/ContactList.ts > entity/contact/ContactListRelation.ts
20) entity/contact/ContactList.ts > entity/job/JobImportContactList.ts
21) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts
22) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/application/ApplicationMedia.ts
23) entity/document/Document.ts > entity/application/ApplicationMedia.ts
24) entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/campaign/CampaignSequenceTemplateDocument.ts > entity/campaign/CampaignSequenceTemplate.ts
25) entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/campaign/CampaignSequenceTemplateDocument.ts > entity/campaign/CampaignSequenceTemplate.ts
26) entity/campaign/CampaignSequenceTemplateDocument.ts > entity/campaign/CampaignSequenceTemplate.ts
27) entity/document/Document.ts > entity/campaign/CampaignSequenceTemplateDocument.ts
28) entity/job/JobImport.ts > entity/document/Document.ts
29) entity/document/Document.ts > entity/message/MessageDocument.ts
30) entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/message/MessageDocument.ts
31) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts
32) entity/document/Document.ts > entity/organization/OrganizationMedia.ts
33) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/organization/OrganizationMedia.ts
34) entity/document/Document.ts > entity/template/TemplateDocument.ts
35) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/template/TemplateDocument.ts > entity/template/Template.ts
36) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/template/TemplateDocument.ts > entity/template/Template.ts
37) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/template/TemplateDocument.ts > entity/template/Template.ts > entity/template/TemplateCategory.ts
38) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/template/TemplateDocument.ts > entity/template/Template.ts > entity/template/TemplateCategory.ts
39) entity/template/Template.ts > entity/template/TemplateCategory.ts
40) entity/template/Template.ts > entity/template/TemplateCategory.ts > entity/template/TemplateCategoryRelation.ts
41) entity/template/TemplateCategory.ts > entity/template/TemplateCategoryRelation.ts
42) entity/template/TemplateDocument.ts > entity/template/Template.ts
43) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/template/TemplateDocument.ts > entity/template/Template.ts > entity/template/TemplateTag.ts
44) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/template/TemplateDocument.ts > entity/template/Template.ts > entity/template/TemplateTag.ts
45) entity/template/Template.ts > entity/template/TemplateTag.ts
46) entity/template/Template.ts > entity/template/TemplateTag.ts > entity/template/TemplateTagRelation.ts
47) entity/template/TemplateTag.ts > entity/template/TemplateTagRelation.ts
48) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/user/User.ts
49) entity/document/Document.ts > entity/user/User.ts
50) entity/job/JobImport.ts > entity/document/Document.ts > entity/user/User.ts
51) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/user/User.ts
52) entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/user/User.ts > entity/organization/OrganizationMember.ts
53) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/user/User.ts > entity/organization/OrganizationMember.ts
54) entity/user/User.ts > entity/organization/OrganizationMember.ts
55) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/user/User.ts > entity/user/UserActivity.ts
56) entity/user/User.ts > entity/user/UserActivity.ts
57) entity/application/Application.ts > entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/document/Document.ts > entity/user/User.ts > entity/user/UserEmailAddress.ts
58) entity/user/User.ts > entity/user/UserEmailAddress.ts
59) entity/job/JobImportContactList.ts > entity/job/JobImport.ts
60) entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/job/JobImportContactMergetag.ts > entity/contact/ContactMergetag.ts > entity/campaign/CampaignContactMergetag.ts
61) entity/contact/ContactMergetag.ts > entity/campaign/CampaignContactMergetag.ts
62) entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/job/JobImportContactMergetag.ts > entity/contact/ContactMergetag.ts > entity/contact/ContactMergetagRelation.ts
63) entity/contact/ContactMergetag.ts > entity/contact/ContactMergetagRelation.ts
64) entity/job/JobImportContactMergetag.ts > entity/contact/ContactMergetag.ts
65) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/job/JobImportContactMergetag.ts > entity/contact/ContactMergetag.ts
66) entity/job/JobImport.ts > entity/job/JobImportContactMergetag.ts
67) entity/contact/ContactPipeline.ts > entity/contact/ContactPipelineColumn.ts
68) entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/job/JobImportContactPipeline.ts > entity/contact/ContactPipeline.ts > entity/contact/ContactPipelineColumn.ts > entity/contact/ContactPipelineColumnRelation.ts
69) entity/contact/ContactPipeline.ts > entity/contact/ContactPipelineColumn.ts > entity/contact/ContactPipelineColumnRelation.ts
70) entity/contact/ContactPipelineColumn.ts > entity/contact/ContactPipelineColumnRelation.ts
71) entity/job/JobImportContactPipeline.ts > entity/contact/ContactPipeline.ts
72) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/job/JobImportContactPipeline.ts > entity/contact/ContactPipeline.ts
73) entity/job/JobImport.ts > entity/job/JobImportContactPipeline.ts
74) entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/job/JobImportContactTag.ts > entity/contact/ContactTag.ts > entity/campaign/CampaignContactTag.ts
75) entity/contact/ContactTag.ts > entity/campaign/CampaignContactTag.ts
76) entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/job/JobImportContactTag.ts > entity/contact/ContactTag.ts > entity/contact/ContactTagRelation.ts
77) entity/contact/ContactTag.ts > entity/contact/ContactTagRelation.ts
78) entity/job/JobImportContactTag.ts > entity/contact/ContactTag.ts
79) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/job/JobImportContactTag.ts > entity/contact/ContactTag.ts
80) entity/job/JobImport.ts > entity/job/JobImportContactTag.ts
81) entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts > entity/job/JobImportRow.ts
82) entity/job/JobImport.ts > entity/job/JobImportRow.ts
83) entity/organization/Organization.ts > entity/contact/ContactList.ts > entity/job/JobImportContactList.ts > entity/job/JobImport.ts
84) entity/organization/Organization.ts > entity/contact/ContactList.ts
85) entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactPhoneNumber.ts
86) entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/contact/ContactPhoneNumber.ts
87) entity/organization/Organization.ts > entity/contact/ContactPhoneNumber.ts
88) entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts
89) entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts
90) entity/application/ApplicationDomain.ts > entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/organization/OrganizationDomain.ts
91) entity/domain/Domain.ts > entity/domain/DomainEmailAddress.ts > entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts > entity/contact/ContactAddress.ts > entity/organization/Organization.ts > entity/organization/OrganizationDomain.ts
92) entity/organization/Organization.ts > entity/organization/OrganizationDomain.ts
93) entity/organization/Organization.ts > entity/organization/OrganizationInvite.ts
94) entity/contact/Contact.ts > entity/contact/ContactNote.ts
95) entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts > entity/campaign/CampaignContact.ts > entity/contact/Contact.ts
96) entity/campaign/CampaignSequenceItem.ts > entity/campaign/Campaign.ts
97) entity/message/Message.ts > entity/campaign/CampaignSequenceItem.ts
98) entity/domain/DomainEmailAddress.ts > entity/message/Message.ts
```

## Running
```
npm install
npm run build
npm run services
```
