import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from './translate.loader';
export const appConfig: ApplicationConfig = {
  // providers:
  // [
  //   provideRouter(routes)
  //   ,
  //    provideHttpClient() ,

  //    importProvidersFrom(

  //     TranslateModule.forRoot({
  //       defaultLanguage: 'en',
  //       loader: {
  //         provide: TranslateLoader,
  //         useFactory: HttpLoaderFactory,
  //         deps: [HttpClient]
  //       }
  //     }

  //   ))
  // ]

    providers: [
    provideRouter(routes),
    provideHttpClient(),


    // ⬇️ أضف هذه التهيئة الخاصة بـ ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'  // أو 'ar' حسب ما تريد
    }).providers!
  ]
};


