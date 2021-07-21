import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';
import{MenuComponent} from './menu/menu.component';
import{FirstpageComponent} from './firstpage/firstpage.component';
import{TacoComponent} from './taco/taco.component';
import{BurritosComponent} from './burritos/burritos.component';
import{MealsComponent} from './meals/meals.component';
import{QuesdillaComponent} from './quesdilla/quesdilla.component';
import{SnackbevComponent} from './snackbev/snackbev.component';
 import{LoginComponent} from './login/login.component';
import{LoggedinComponent} from './loggedin/loggedin.component';
import{AuthGuard} from './_guards/auth.guard';



const routes: Routes = [{path:'login',component:LoginComponent},{path:'loggedin',component:LoggedinComponent,canActivate:[AuthGuard]},{path:'',component:FirstpageComponent,pathMatch:"full"},{path:'firstpage',component:FirstpageComponent},
{path:'about',component:AboutComponent},{path:'contact',component:ContactComponent},{path:'menu',component:MenuComponent},
{path:'taco',component:TacoComponent},{path:'burritos',component:BurritosComponent},{path:'meals',component:MealsComponent},{path:'quesdilla',component:QuesdillaComponent},{path:'snackbev',component:SnackbevComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
