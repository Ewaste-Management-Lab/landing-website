import { InjectionToken } from '@angular/core';

export interface Metrics {
  increment(name: string, tags?: Record<string, string>): void;
  histogram(name: string, value: number, tags?: Record<string, string>): void;
}

export const METRICS = new InjectionToken<Metrics>('Metrics');
