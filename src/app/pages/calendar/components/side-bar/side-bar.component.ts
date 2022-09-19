import { Component, OnInit } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {CalendarService} from "../../calendar.service";


@Component({
  selector: 'app-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  imports: [
    MatCardModule,
    MatDatepickerModule,MatNativeDateModule
  ],
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {




  constructor(private srv: CalendarService) { }

  onDateChange = (ev:Date) => this.srv.$date.next(this.srv.dateCalc(ev.toDateString()));


  ngOnInit(): void {
  }

}
