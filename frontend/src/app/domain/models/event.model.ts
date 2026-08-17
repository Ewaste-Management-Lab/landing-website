export interface DomainEvent {
  type: string;
  data: Record<string, unknown>;
  timestamp: number;
}

export function createDomainEvent(type: string, data: Record<string, unknown> = {}): DomainEvent {
  return {
    type,
    data,
    timestamp: Date.now(),
  };
}
