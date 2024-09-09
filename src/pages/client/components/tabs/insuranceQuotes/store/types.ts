export interface QuotesShape {
  notes: NotesType[];
}

export interface NotesType {
  index: number;
  note: string;
  date: string;
}
