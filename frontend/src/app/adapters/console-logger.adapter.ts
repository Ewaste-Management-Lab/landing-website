import { Injectable } from '@angular/core';
import { Logger } from '@domain/ports/logger.port';

@Injectable()
export class ConsoleLogger implements Logger {
  info(msg: string, data?: Record<string, unknown>): void {
    if (data) {
      console.log(`[INFO] ${msg}`, data);
    } else {
      console.log(`[INFO] ${msg}`);
    }
  }

  warn(msg: string, data?: Record<string, unknown>): void {
    if (data) {
      console.warn(`[WARN] ${msg}`, data);
    } else {
      console.warn(`[WARN] ${msg}`);
    }
  }

  error(msg: string, error?: Error, data?: Record<string, unknown>): void {
    if (error && data) {
      console.error(`[ERROR] ${msg}`, error, data);
    } else if (error) {
      console.error(`[ERROR] ${msg}`, error);
    } else {
      console.error(`[ERROR] ${msg}`);
    }
  }
}
