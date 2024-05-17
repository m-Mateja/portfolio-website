import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {Subscription} from "rxjs";
import {ClickService} from "../../services/click.service";
import {CommonModule} from "@angular/common";
import {TimerService} from "../../services/timer.service";
import {MouseDistanceService} from "../../services/mouse-distance.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-cool-section',
  standalone: true,
    imports: [MatCardModule, MatExpansionModule, MatTableModule, CommonModule, MatButtonModule],
  templateUrl: './cool-section.component.html',
  styleUrl: './cool-section.component.css'
})
export class CoolSectionComponent implements OnInit{
  clickCount: number = 0
  clickCountSub!: Subscription
  timerCount: number = 0;
  timerSubscription!: Subscription;
  totalMouseDistance: number = 0;
  mouseDistanceSubscription!: Subscription;

  hireSelection:string = '???'
  noHireClickCounter:number = 0

  constructor(public clickService: ClickService,
              public timerService: TimerService,
              public mouseDistanceService: MouseDistanceService) {
  }

  ngOnInit() {
    this.clickCountSub = this.clickService.getClickCount().subscribe((count:number) => {
      this.clickCount = count
    })
    this.timerSubscription = this.timerService.getTimer().subscribe((time:number) => {
      this.timerCount = time
    })
    this.mouseDistanceService.startTracking();
    this.mouseDistanceSubscription = this.mouseDistanceService.getDistance().subscribe(distance => {
      this.totalMouseDistance = distance;
    });
  }

  yesClick(){
    this.hireSelection = 'Yes'
    this.noHireClickCounter = 0
  }

  noClick(){
    this.noHireClickCounter ++
    if(this.noHireClickCounter == 1){
      this.hireSelection = "You missed the Yes button"
    }
    else if(this.noHireClickCounter == 2){
      this.hireSelection = "Wrong one again..."
    }
    else if(this.noHireClickCounter == 3){
      this.hireSelection = ':('
    }
    else if(this.noHireClickCounter >3){
      this.hireSelection = 'Ok, so Yes'
    }
  }
}
