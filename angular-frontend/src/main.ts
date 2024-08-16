import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// appConfig ve ek sağlayıcıları tek bir bootstrap çağrısında birleştirin
bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Mevcut sağlayıcıları doğru bir şekilde birleştirdiğinizden emin olun
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
