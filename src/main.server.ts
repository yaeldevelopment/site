import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './component/app/app.component';
import { config } from './component/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
