import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {LaptopsModule} from "./components/laptops/laptops.module";

platformBrowserDynamic().bootstrapModule(LaptopsModule)
  .catch(err => console.error(err));
