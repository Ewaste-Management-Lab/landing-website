import { Injectable } from '@angular/core';
import { EventPublisher } from '@domain/ports/event.port';
import { DomainEvent } from '@domain/models/event.model';

@Injectable()
export class FirebaseEventPublisherAdapter implements EventPublisher {
  private analytics: any = null;

  private async getAnalyticsSafe() {
    if (this.analytics) return this.analytics;
    try {
      const { getAnalytics } = await import('firebase/analytics');
      this.analytics = getAnalytics();
      return this.analytics;
    } catch {
      return null;
    }
  }

  async publish(event: DomainEvent): Promise<void> {
    const a = await this.getAnalyticsSafe();
    if (a) {
      const { logEvent } = await import('firebase/analytics');
      logEvent(a, event.type, { ...event.data, timestamp: event.timestamp });
    }
  }
}
