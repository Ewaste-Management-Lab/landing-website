import { InjectionToken } from '@angular/core';
import { DomainEvent } from '@domain/models/event.model';

export interface EventPublisher {
  publish(event: DomainEvent): void;
}

export const EVENT_PUBLISHER = new InjectionToken<EventPublisher>('EventPublisher');
