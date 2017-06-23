import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

import { HomeComponent } from './home';
import { PortfolioComponent } from './portfolio';
import { AboutComponent } from './about';
import { ContactsComponent } from './contacts';
import { NoContentComponent } from './no-content';
import { ROUTES } from './routes';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        PortfolioComponent,
        AboutComponent,
        ContactsComponent,
        NoContentComponent,
        ROUTES
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();

  });
});

