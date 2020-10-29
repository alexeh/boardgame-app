import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './routes';

// Components
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [AppComponent, RegisterFormComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
