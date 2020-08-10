import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ServicesComponent } from './Components/services/services.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'services', component: ServicesComponent},

  // if no route, redirect to home
  { path: '**', redirectTo: '' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
