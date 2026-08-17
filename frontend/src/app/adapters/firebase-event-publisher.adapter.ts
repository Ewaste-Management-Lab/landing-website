import { Injectable } from '@angular/core';
import { EventPublisher } from '@domain/ports/event.port';
import { DomainEvent } from '@domain/models/event.model';
import { getAnalytics, logEvent } from 'firebase/analytics';

@Injectable()
export class FirebaseEventPublisherAdapter implements EventPublisher {
  private analytics = getAnalytics();

  publish(event: DomainEvent): void {
    logEvent(this.analytics, event.type, {
      ...event.data,
      timestamp: event.timestamp,
    });
  }
}
