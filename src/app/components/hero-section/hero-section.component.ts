import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatButton
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
