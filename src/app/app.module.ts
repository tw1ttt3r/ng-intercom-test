import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IntercomModule } from 'ng-intercom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntercomModule.forRoot({
      appId: environment.APP_ID_BOT,
      updateOnRouterChange: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
