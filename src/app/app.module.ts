import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './components/app/app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [AppComponent, RegisterFormComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
