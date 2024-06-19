import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { routes } from './app.routes';
// import { appConfig } from './app.config';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ]
};

// export const config = mergeApplicationConfig(appConfig, serverConfig);
export const config = serverConfig;
