import { Injectable } from '@angular/core';
import { ContactSubmissionPort } from '@domain/ports/contact.port';
import { ContactMessage, ContactSubmissionResult } from '@domain/models/contact.model';

@Injectable()
export class FirebaseContactAdapter implements ContactSubmissionPort {
  async submit(message: ContactMessage): Promise<ContactSubmissionResult> {
    try {
      const { getDatabase, ref, push } = await import('firebase/database');
      const db = getDatabase();
      await push(ref(db, 'contacts'), {
        ...message,
        timestamp: Date.now(),
        read: false,
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }
}
