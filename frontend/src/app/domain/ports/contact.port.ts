import { InjectionToken } from '@angular/core';
import { ContactMessage, ContactSubmissionResult } from '@domain/models/contact.model';

export interface ContactSubmissionPort {
  submit(message: ContactMessage): Promise<ContactSubmissionResult>;
}

export const CONTACT_SUBMISSION_PORT = new InjectionToken<ContactSubmissionPort>(
  'ContactSubmissionPort',
);
