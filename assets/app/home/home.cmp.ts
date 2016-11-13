import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Log, Level } from 'ng2-logger/ng2-logger';
const log = Log.create('HomeCmp()');
log.color = 'orange';

@Component({
  templateUrl: './home.html'
})
export class HomeCmp {

}