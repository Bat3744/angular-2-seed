import { enableProdMode } from '@angular/core';
import './polyfills.browser';
import './styles.css';
import 'jquery';
import 'bootstrap';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export const platformRef = platformBrowserDynamic();

export function main() {

	if (!/localhost/.test(document.location.host)) {
		enableProdMode();
	}

  return platformRef.bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

// support async tag or hmr
switch (document.readyState) {
  case 'interactive':
  case 'complete':
    main();
    break;
  case 'loading':
  default:
    document.addEventListener('DOMContentLoaded', () => main());
}
