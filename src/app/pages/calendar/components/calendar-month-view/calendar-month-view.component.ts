import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-month-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-month-view.component.html',
  styleUrls: ['./calendar-month-view.component.scss']
})
export class CalendarMonthViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
