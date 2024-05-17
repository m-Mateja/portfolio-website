import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavComponent} from "../nav/nav.component";
import {MatButton} from "@angular/material/button";
import {HeroSectionComponent} from "../hero-section/hero-section.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, NavComponent, MatButton, HeroSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
