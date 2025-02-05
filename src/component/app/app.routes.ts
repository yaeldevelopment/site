import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { SampleWebsitesComponent } from '../sample-websites/sample-websites.component';

export const routes: Routes = [{path:"",component:HomeComponent},{path:"אודות",component:AboutComponent},{path:"צור-קשר",component:ContactPageComponent},{path:"אתרים-לדוגמא",component:SampleWebsitesComponent}];
