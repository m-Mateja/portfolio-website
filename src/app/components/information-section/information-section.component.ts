import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-information-section',
  standalone: true,
  imports: [],
  templateUrl: './information-section.component.html',
  styleUrl: './information-section.component.css'
})
export class InformationSectionComponent implements OnInit{
  @ViewChild('informationSection') informationSection!: ElementRef
  constructor(public utilService: UtilsService) {
  }

  ngOnInit() {
   this.downArrowSub()
  }

  downArrowSub(){
    this.utilService.downArrowClicked.subscribe((data:any) => {
      this.scrollIntoView()
    })
  }

  scrollIntoView(){
    if (this.informationSection) {
      this.informationSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
