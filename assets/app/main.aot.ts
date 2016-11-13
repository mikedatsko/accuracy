import './polyfills';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { Log } from 'ng2-logger/ng2-logger';

import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode();
Log.setProductionMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);