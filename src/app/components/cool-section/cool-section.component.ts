import { Component } from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-cool-section',
  standalone: true,
    imports: [MatCardModule, MatExpansionModule, MatTableModule],
  templateUrl: './cool-section.component.html',
  styleUrl: './cool-section.component.css'
})
export class CoolSectionComponent {

}
