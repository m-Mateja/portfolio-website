import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  constructor() {

  }

  ngOnInit() {

  }
}
