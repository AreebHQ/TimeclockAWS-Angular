import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { YesNoPipe } from './yes-no.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './Helpers/auth.interceptor';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ShiftsComponent,
    YesNoPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
