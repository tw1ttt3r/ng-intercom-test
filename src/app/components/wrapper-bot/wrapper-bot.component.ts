import {
  Component,
  OnInit
} from '@angular/core';

import {
  environment
} from '../../../environments/environment';

@Component({
  selector: 'app-wrapper-bot',
  templateUrl: './wrapper-bot.component.html',
  styleUrls: ['./wrapper-bot.component.scss']
})
export class WrapperBotComponent implements OnInit {

  constructor() {
    window['intercomSettings'] = {
      app_id: environment.APP_ID_BOT
    };
  }

  ngOnInit() {
    const w = window;
    const ic = w['Intercom'];
    if (typeof ic === 'function') {
      ic('reattach_activator');
      ic('update', 'intercomSettings');
    } else {
      const d = document;
      const i = () => {
        i['c'](arguments);
      };
      i['q'] = [];
      i['c'] = (args: any) => {
        i['q'].push(args);
      };
      w['Intercom'] = i;

      function l() {
        const s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://widget.intercom.io/widget/' + environment.APP_ID_BOT;
        const x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
      if (w['attachEvent']) {
        w['attachEvent']('onload', l);
      } else {
        w.addEventListener('load', l, false);
      }
    }
  }

}
