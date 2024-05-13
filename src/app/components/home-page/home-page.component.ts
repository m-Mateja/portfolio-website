import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavComponent} from "../nav/nav.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, NavComponent, MatButton],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
