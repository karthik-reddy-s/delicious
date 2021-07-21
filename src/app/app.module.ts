import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { TacoComponent } from './taco/taco.component';
import { BurritosComponent } from './burritos/burritos.component';

import { QuesdillaComponent } from './quesdilla/quesdilla.component';
import { MealsComponent } from './meals/meals.component';
import { SnackbevComponent } from './snackbev/snackbev.component';
 import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{InterceptorService} from 'src/app/services/interceptor.service';
import { PractiseComponent } from './practise/practise.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    FirstpageComponent,
    TacoComponent,
    BurritosComponent,
    QuesdillaComponent,
    MealsComponent,
    SnackbevComponent,
     LoginComponent,
    SignupComponent,
    LoggedinComponent,
    PractiseComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
