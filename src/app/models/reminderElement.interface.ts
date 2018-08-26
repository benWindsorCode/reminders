export interface ReminderElement {
  createdDate: string;
  dueDate: string;
  authorId: number;
  reminderText: string;
}

export interface ReminderElementSource {
  source: ReminderElement;
}
