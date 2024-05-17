import {Component, OnInit} from '@angular/core';
import { ParticlesConfig } from '../../specials/particles-config';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
declare let particlesJS: any;

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [MatIconModule, MatIconButton, CommonModule, MatButtonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
    this.invokeParticles()
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {})
  }
}
