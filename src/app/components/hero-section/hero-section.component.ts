import {Component, OnInit} from '@angular/core';
import { ParticlesConfig } from '../../specials/particles-config';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
import {UtilsService} from "../../services/utils.service";
declare let particlesJS: any;

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [MatIconModule, MatIconButton, CommonModule, MatButtonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit{

  constructor(public utilService: UtilsService) {
  }
  ngOnInit() {
    // this.invokeParticles()
  }

  // invokeParticles(): void {
  //   particlesJS('particles-js', ParticlesConfig, function() {})
  // }

  downArrowClick(){
    this.utilService.downArrowEvent('click')
  }
}
