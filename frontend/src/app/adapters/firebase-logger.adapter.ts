import { Injectable } from '@angular/core';
import { Logger } from '@domain/ports/logger.port';
import { getAnalytics, logEvent } from 'firebase/analytics';

@Injectable()
export class FirebaseLoggerAdapter implements Logger {
  private analytics = getAnalytics();

  info(msg: string, data?: Record<string, unknown>): void {
    logEvent(this.analytics, 'app_info', { message: msg, ...data });
  }

  warn(msg: string, data?: Record<string, unknown>): void {
    logEvent(this.analytics, 'app_warning', { message: msg, ...data });
  }

  error(msg: string, error?: Error, data?: Record<string, unknown>): void {
    logEvent(this.analytics, 'app_error', {
      message: msg,
      error_name: error?.name,
      error_message: error?.message,
      ...data,
    });
  }
}
