import { Injectable } from '@angular/core';
import { Logger } from '@domain/ports/logger.port';

@Injectable()
export class FirebaseLoggerAdapter implements Logger {
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

  async info(msg: string, data?: Record<string, unknown>): Promise<void> {
    const a = await this.getAnalyticsSafe();
    if (a) {
      const { logEvent } = await import('firebase/analytics');
      logEvent(a, 'app_info', { message: msg, ...data });
    }
  }

  async warn(msg: string, data?: Record<string, unknown>): Promise<void> {
    const a = await this.getAnalyticsSafe();
    if (a) {
      const { logEvent } = await import('firebase/analytics');
      logEvent(a, 'app_warning', { message: msg, ...data });
    }
  }

  async error(msg: string, error?: Error, data?: Record<string, unknown>): Promise<void> {
    const a = await this.getAnalyticsSafe();
    if (a) {
      const { logEvent } = await import('firebase/analytics');
      logEvent(a, 'app_error', {
        message: msg,
        error_name: error?.name,
        error_message: error?.message,
        ...data,
      });
    }
  }
}
