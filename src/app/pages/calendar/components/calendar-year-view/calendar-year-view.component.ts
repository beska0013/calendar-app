import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-year-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-year-view.component.html',
  styleUrls: ['./calendar-year-view.component.scss']
})
export class CalendarYearViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
