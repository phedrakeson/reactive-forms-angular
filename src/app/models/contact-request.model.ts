export class ContactRequest {
  personalData: PersonalData = {} as PersonalData
  requestType: any
  text: string = ''
}

export class PersonalData {
  email: string = 'email@example.com'
  mobile: string = ''
  country: string = ''
}