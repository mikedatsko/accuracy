import './polyfills';
import { enableProdMode } from '@angular/core';
import { Log } from 'ng2-logger/ng2-logger';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
enableProdMode();
Log.setProductionMode();
platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.aot.js.map