import { InjectionToken } from '@angular/core';

export interface Logger {
  info(msg: string, data?: Record<string, unknown>): void;
  warn(msg: string, data?: Record<string, unknown>): void;
  error(msg: string, error?: Error, data?: Record<string, unknown>): void;
}

export const LOGGER = new InjectionToken<Logger>('Logger');
