import { Injectable } from '@angular/core';
import { Metrics } from '@domain/ports/metrics.port';

@Injectable()
export class FirebaseMetricsAdapter implements Metrics {
  private perf: any = null;

  private async getPerfSafe() {
    if (this.perf) return this.perf;
    try {
      const { getPerformance } = await import('firebase/performance');
      this.perf = getPerformance();
      return this.perf;
    } catch {
      return null;
    }
  }

  async increment(name: string, tags?: Record<string, string>): Promise<void> {
    const p = await this.getPerfSafe();
    if (p) {
      const { trace } = await import('firebase/performance');
      const t = trace(p, `counter_${name}`);
      t.start();
      if (tags) {
        Object.entries(tags).forEach(([key, value]) => t.putAttribute(key, value));
      }
      t.stop();
    }
  }

  async histogram(name: string, value: number, tags?: Record<string, string>): Promise<void> {
    const p = await this.getPerfSafe();
    if (p) {
      const { trace } = await import('firebase/performance');
      const t = trace(p, `histogram_${name}`);
      t.start();
      t.putMetric('value', value);
      if (tags) {
        Object.entries(tags).forEach(([key, val]) => t.putAttribute(key, val));
      }
      t.stop();
    }
  }
}
