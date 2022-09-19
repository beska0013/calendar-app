import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarWeekRoutingModule} from "./components/calendar-week-view/calendar-week-routing.module";
import {CalendarYearRoutingModule} from "./components/calendar-year-view/calendar-year-routing.module";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./calendar.component').then(c =>  c.CalendarComponent),
    children:[
      {
        path: '',
        redirectTo:'day',
        pathMatch:'full'
      },
      {
        path:'day',
        loadChildren:() => import('./components/calendar-day-view/calendar-day-view-routing.module').then(m => m.CalendarDayViewRoutingModule)
      },
      {
        path:'week',
        loadChildren:() => import('./components/calendar-week-view/calendar-week-routing.module').then(m => m.CalendarWeekRoutingModule)
      },
      {
        path:'month',
        loadChildren:() => import('./components/calendar-month-view/calendar-month-routing.module').then(m => m.CalendarMonthRoutingModule)
      },
      {
        path:'year',
        loadChildren:() => import('./components/calendar-year-view/calendar-year-routing.module').then(m => m.CalendarYearRoutingModule)
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
