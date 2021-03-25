export interface ContactRequest {
  personalData: PersonalData
  requestType: any
  text: string
}

export interface PersonalData {
  email: string
  mobile: string
  country: string
}