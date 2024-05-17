import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavComponent} from "../nav/nav.component";
import {MatButtonModule} from "@angular/material/button";
import {HeroSectionComponent} from "../hero-section/hero-section.component";
import {InformationSectionComponent} from "../information-section/information-section.component";
import {UtilsService} from "../../services/utils.service";
import {CoolSectionComponent} from "../cool-section/cool-section.component";
import {ClickService} from "../../services/click.service";
import {TimerService} from "../../services/timer.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, NavComponent, MatButtonModule, HeroSectionComponent, InformationSectionComponent, CoolSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  constructor(public utilService: UtilsService,
              public clickService: ClickService,
              public timerService: TimerService) {
  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    this.clickService.incrementClickCount();
  }


}
