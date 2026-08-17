import { bootstrapApplication } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { firebaseConfig } from './environments/environment';

const app = initializeApp(firebaseConfig);
getAnalytics(app);
getPerformance(app);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
