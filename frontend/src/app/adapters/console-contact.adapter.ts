import { Injectable } from '@angular/core';
import { ContactSubmissionPort } from '@domain/ports/contact.port';
import { ContactMessage, ContactSubmissionResult } from '@domain/models/contact.model';

@Injectable()
export class ConsoleContactAdapter implements ContactSubmissionPort {
  async submit(message: ContactMessage): Promise<ContactSubmissionResult> {
    console.log('[CONTACT] Message submitted:', message);
    return { success: true };
  }
}
