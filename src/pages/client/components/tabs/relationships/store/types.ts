export interface RelationshipShape {
  meritalStatus: string;
  nameOfSpouse: string;
  children: ChildrenType[];
  importantDate: ImportantDateType[];
}

export interface ChildrenType {
  index: number;
  childrenName: string;
  dob: string;
}

export interface ImportantDateType {
  index: number;
  eventName: string;
  date: string;
}

export type RelationUpdatePayload<K extends keyof RelationshipShape> = {
  key: K;
  value: RelationshipShape[K];
};

export enum Marital_Status {
  Married = "married",
  Unmarried = "unmarried",
}
