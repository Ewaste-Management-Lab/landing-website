import { Injectable } from '@angular/core';
import { Metrics } from '@domain/ports/metrics.port';

@Injectable()
export class ConsoleMetrics implements Metrics {
  increment(name: string, tags?: Record<string, string>): void {
    console.log(`[METRIC] ${name} +1`, tags || '');
  }

  histogram(name: string, value: number, tags?: Record<string, string>): void {
    console.log(`[METRIC] ${name} = ${value}`, tags || '');
  }
}
