import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

import {
  THEME_PERSISTENCE_PORT,
  THEME_RESOLVER_PORT,
  THEME_RENDERER_PORT,
} from '@domain/ports/theme.port';
import { LOGGER } from '@domain/ports/logger.port';
import { METRICS } from '@domain/ports/metrics.port';
import { EVENT_PUBLISHER } from '@domain/ports/event.port';

import { LocalStorageThemeAdapter } from '@adapters/localstorage-theme.adapter';
import { BrowserThemeResolverAdapter } from '@adapters/browser-theme-resolver.adapter';
import { CssThemeRendererAdapter } from '@adapters/css-theme-renderer.adapter';
import { FirebaseLoggerAdapter } from '@adapters/firebase-logger.adapter';
import { FirebaseMetricsAdapter } from '@adapters/firebase-metrics.adapter';
import { FirebaseEventPublisherAdapter } from '@adapters/firebase-event-publisher.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
    { provide: THEME_PERSISTENCE_PORT, useClass: LocalStorageThemeAdapter },
    { provide: THEME_RESOLVER_PORT, useClass: BrowserThemeResolverAdapter },
    { provide: THEME_RENDERER_PORT, useClass: CssThemeRendererAdapter },
    { provide: LOGGER, useClass: FirebaseLoggerAdapter },
    { provide: METRICS, useClass: FirebaseMetricsAdapter },
    { provide: EVENT_PUBLISHER, useClass: FirebaseEventPublisherAdapter },
  ],
};
