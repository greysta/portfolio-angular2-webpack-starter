import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }   from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import {
  NgModule,
} from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { PortfolioComponent } from './portfolio';
import { PortfolioItemComponent } from './portfolio-item';
import { AboutComponent } from './about';
import { PortfolioListComponent } from './portfolio-list';
import { ContactsComponent } from './contacts';
import { NoContentComponent } from './no-content';
import '../styles/styles.scss';
import '../styles/headings.css';
// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    HomeComponent,
    PortfolioComponent,
    PortfolioListComponent,
    PortfolioItemComponent,
    NoContentComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
}
