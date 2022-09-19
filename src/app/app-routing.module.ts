import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'intro',
    pathMatch:'full'
  },
  {
    path:'intro',
    loadChildren: ()=> import('./pages/intro/intro-routing.module').then(m => m.IntroRoutingModule )
  },
  {
    path:'calendar',
    loadChildren: ()=> import('./pages/calendar/calendar-routing.module').then(m => m.CalendarRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
