import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UtilsService} from "../../services/utils.service";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {Experience} from "../../interfaces/interfaces";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-information-section',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, NgForOf],
  templateUrl: './information-section.component.html',
  styleUrl: './information-section.component.css'
})
export class InformationSectionComponent implements OnInit{
  @ViewChild('informationSection') informationSection!: ElementRef

  lexingtonExperience: Experience = {
    position: 'Software Consultant - Capital Markets',
    locationAndDate: 'Lexington Innovations (Nov.2021 - Present)',
    body: [
      '- Engineered a real-time precious metals trading application using Angular, Java, and Spring MVC, allowing client transaction capabilities through an RFQ system.',
      '- Utilized Kafka for EDA to develop an application with enhanced horizontal scalability.',
      '- Created an RBAC system leveraging JWT and Spring Security for custom role based client views and API access for over 500 clients.',
      'Developed a custom GUI using Angular and SockJS websockets for blistering fast performance and 40% better loading times.',
      'Designed a containerized CI/CD pipeline for deploying to AWS EKS, increasing deployment speed and frequency by 70%.',
      'Managed a team of 5 software engineers through weekly scrum calls, Jira ticket allocation, and approval/review of PR’s on Github.'
    ]
  }
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
