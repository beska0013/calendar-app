import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {CalendarService} from "../../calendar.service";
import {AsyncPipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    AsyncPipe
  ],
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  dayNum = new Date().getDate();
  type = 'Day'
  @Input() date!:string;

  constructor(private srv:CalendarService, private router: Router) { }

  increaseDate = () => {
    const nextDate = new Date(this.date).setDate(new Date(this.date).getDate() + 1);
    return this.srv.$date.next(this.srv.dateCalc(new Date(nextDate).toDateString()))
  }
  decreaseDate = () => {
    const prveDate =  new Date(this.date).setDate(new Date(this.date).getDate() - 1);
    return this.srv.$date.next(this.srv.dateCalc(new Date(prveDate).toDateString()))
  }
  getTodayDate = () => this.srv.$date.next(this.srv.dateCalc(new Date().toDateString()))
  changeType = (type: string) => {
    this.type = type;
    this.router.navigate([`calendar/${type.toLowerCase()}`])
  }



  ngOnInit(): void {
    console.log(this.router);
  }

}
