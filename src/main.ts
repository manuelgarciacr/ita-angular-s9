/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// require("/node_modules/bcryptjs/dist/bcrypt.js")
//             // eslint-disable-next-line no-var
//             var bcrypt = dcodeIO.bcrypt;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
