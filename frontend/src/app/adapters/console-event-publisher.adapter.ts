import { Injectable } from '@angular/core';
import { EventPublisher } from '@domain/ports/event.port';
import { DomainEvent } from '@domain/models/event.model';

@Injectable()
export class ConsoleEventPublisher implements EventPublisher {
  publish(event: DomainEvent): void {
    console.log(`[EVENT] ${event.type}`, event.data);
  }
}
