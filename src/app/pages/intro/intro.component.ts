import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroRoutingModule } from "./intro-routing.module";
import {MatButtonModule} from "@angular/material/button";




@Component({
  selector: 'app-intro-routing',
  standalone: true,
  imports: [
    IntroRoutingModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
