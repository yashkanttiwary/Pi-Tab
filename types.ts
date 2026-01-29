export interface FormData {
  parentName: string;
  mobileNumber: string;
  city: string;
  childClass: string;
}

export interface FormErrors {
  parentName?: string;
  mobileNumber?: string;
  city?: string;
  childClass?: string;
}

export enum AppView {
  LANDING = 'LANDING',
  THANK_YOU = 'THANK_YOU',
}