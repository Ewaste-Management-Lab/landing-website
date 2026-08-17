import { Injectable } from '@angular/core';
import { Metrics } from '@domain/ports/metrics.port';
import { getPerformance, trace } from 'firebase/performance';

@Injectable()
export class FirebaseMetricsAdapter implements Metrics {
  private perf = getPerformance();

  increment(name: string, tags?: Record<string, string>): void {
    const t = trace(this.perf, `counter_${name}`);
    t.start();
    if (tags) {
      Object.entries(tags).forEach(([key, value]) => {
        t.putAttribute(key, value);
      });
    }
    t.stop();
  }

  histogram(name: string, value: number, tags?: Record<string, string>): void {
    const t = trace(this.perf, `histogram_${name}`);
    t.start();
    t.putMetric('value', value);
    if (tags) {
      Object.entries(tags).forEach(([key, val]) => {
        t.putAttribute(key, val);
      });
    }
    t.stop();
  }
}
