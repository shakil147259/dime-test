interface BeneficiariesType {
  index: number;
  name: string;
  relationship: string;
  percentage: number;
}

export interface BasicInfoShape {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  policyStartDate: Date;
  policyEndDate: Date;
  socialSecurityNumber: string;
  servicePreference: string;
  preferredContactMethod: string;
  emailAddress: string;
  phoneNumber: string;
  referralSource: string;
  occupation: string;
  employer: string;
  streetAddress: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  beneFiciaries: BeneficiariesType[];
}

export type BasicInfoUpdatePayload<K extends keyof BasicInfoShape> = {
  key: K;
  value: BasicInfoShape[K];
};

export enum GenderEnum {
  Male = "m",
  Female = "f",
}

export enum ServicePreferenceEnum {
  Instant_Notification = "insant_notification",
  Regular_Policy_Reviews = "regular_policy_reviews",
  Daily_Digest = "daily_digest",
}

export enum PreferredContactMethodsEnum {
  Email = "email",
  Phone = "phone",
  Text_Message = "text_message",
  Carrier_Pigeon = "carrier_pigeon",
}

export enum ReferralSourcesEnum {
  Colleague = "colleague",
  Social_Media = "social_media",
  Other = "other",
}

export enum OccupationsEnum {
  Doctor = "doctor",
  Lawyer = "lawyer",
  Engineer = "engineer",
  Teacher = "teacher",
  Student = "student",
  Retired = "retired",
  Other = "other",
}
