import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { PortfolioComponent } from './portfolio';
import { PortfolioItemComponent } from './portfolio-item';
import { AboutComponent } from './about';
import { ContactsComponent } from './contacts';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'portfolio',  component: PortfolioComponent},
  {path: 'portfolio/:id',  component: PortfolioItemComponent},
  {path: '**', component: NoContentComponent}
];
