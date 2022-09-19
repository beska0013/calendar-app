import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarRoutingModule} from "./calendar-routing.module";
import {HeaderComponent} from "./components/header/header.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {CalendarViewComponent} from "./components/calendar-view/calendar-view.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CalendarService} from "./calendar.service";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CalendarRoutingModule,
    CommonModule,
    HeaderComponent,
    SideBarComponent,
    CalendarViewComponent,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private srv:CalendarService) { }

  dateObservable = this.srv.getDate();

  ngOnInit(): void {

  }

}
