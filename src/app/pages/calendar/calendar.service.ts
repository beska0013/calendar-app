import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }
  dateCalc = (date:string) => new Date(date).toLocaleDateString("en-US",{
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  }).replace(/,/g, ' ')

  today =  this.dateCalc(new Date().toDateString())

  $date = new BehaviorSubject(this.today);
  getDate = () => this.$date as Observable<any>

}
