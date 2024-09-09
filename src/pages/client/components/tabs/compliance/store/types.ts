export interface ComplianceShape {
  consentForDataStorages: string;
  GDPRStatus: string;
}

export type ComplianceInfoUpdatePayload<K extends keyof ComplianceShape> = {
  key: K;
  value: ComplianceShape[K];
};

export enum CONSENT_FOR_DATA_STORAGE {
  YES = "yes",
  NO = "no",
}

export enum GDPR_COMPLIANCE_STATUS {
  COMPLIANT = "compliant",
  NOT_COMPLIANT = "not_compliant",
}
