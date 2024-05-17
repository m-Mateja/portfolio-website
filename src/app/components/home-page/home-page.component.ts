import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavComponent} from "../nav/nav.component";
import {MatButton} from "@angular/material/button";
import {HeroSectionComponent} from "../hero-section/hero-section.component";
import {InformationSectionComponent} from "../information-section/information-section.component";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, NavComponent, MatButton, HeroSectionComponent, InformationSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  constructor(public utilService: UtilsService) {
  }

  ngOnInit() {

  }

}
