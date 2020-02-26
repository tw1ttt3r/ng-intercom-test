import { Component, OnInit } from '@angular/core';
import { Intercom } from 'ng-intercom';

import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-bot-test';

  constructor(public intercom: Intercom) {}

  ngOnInit() {
    this.intercom.boot({
      app_id: environment.APP_ID_BOT,
      widget: {
        activator: '#intercom'
      }
    });
  }
}
