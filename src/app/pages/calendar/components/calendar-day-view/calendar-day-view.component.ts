import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../../calendar.service";
import {CalendarDayViewRoutingModule} from "./calendar-day-view-routing.module";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {map} from "rxjs";
import {CdkDragDrop, DragDropModule, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-calendar-calendarDay-view',
  standalone: true,
  imports: [
    CommonModule,
    CalendarDayViewRoutingModule,
    MatTableModule,
    DragDropModule
  ],
  templateUrl: './calendar-day-view.component.html',
  styleUrls: ['./calendar-day-view.component.scss']
})
export class CalendarDayViewComponent implements OnInit {


  currentDate!:boolean;

  calendarDay = this.srv.getDate().pipe(
    map(d => {
      this.currentDate = new Date(d).getDate() === new Date().getDate()
      return ({
        name: new Date(d).toLocaleString('en-us', {weekday:'short'}),
        date: new Date(d).getDate()
      })
    } )
  )

  rows = [...Array.from(Array(24).keys())].map(h => h > 12 ? (`${h - 12} PM`) : (`${h} AM`) )
  col = ['timeZone','calendarDay']
  dataSource = this.rows.map(r => ({
    time: r,
    apointnment: {
      name: '',
      at:''
    }
  }))



  drop(event: CdkDragDrop<string[]>) {

  }
  constructor(private srv:CalendarService ) { }

  ngOnInit(): void {}

}
