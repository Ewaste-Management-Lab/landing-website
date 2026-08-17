import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { firebaseConfig } from './environments/environment';

if (firebaseConfig.apiKey) {
  import('firebase/app').then(({ initializeApp }) => {
    const app = initializeApp(firebaseConfig);
    import('firebase/analytics').then(({ getAnalytics }) => getAnalytics(app));
    import('firebase/performance').then(({ getPerformance }) => getPerformance(app));
  });
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
