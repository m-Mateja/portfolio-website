import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UtilsService} from "../../services/utils.service";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {AllExperiences, Experience} from "../../interfaces/interfaces";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-information-section',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommonModule],
  templateUrl: './information-section.component.html',
  styleUrl: './information-section.component.css'
})
export class InformationSectionComponent implements OnInit{
  @ViewChild('informationSection') informationSection!: ElementRef

  allExperiences: AllExperiences = {experiences:[]}
  allProjects: AllExperiences = {experiences:[]}

  lexingtonExperience: Experience = {
    position: 'Software Consultant - Capital Markets',
    locationAndDate: 'Lexington Innovations (Nov.2021 - Present)',
    body: [
      '- Engineered a real-time precious metals trading application using Angular, Java, and Spring MVC, allowing client transaction capabilities through an RFQ system.',
      '- Utilized Kafka for EDA to develop an application with enhanced horizontal scalability.',
      '- Created an RBAC system leveraging JWT and Spring Security for custom role based client views and API access for over 500 clients.',
      '- Developed a custom GUI using Angular and SockJS websockets for blistering fast performance and 40% better loading times.',
      '- Designed a containerized CI/CD pipeline for deploying to AWS EKS, increasing deployment speed and frequency by 70%.',
      '- Managed a team of 5 software engineers through weekly scrum calls, Jira ticket allocation, and approval/review of PR’s on Github.'
    ]
  }

  harmariExperience: Experience = {
    position: 'Software Developer',
    locationAndDate: 'Harmari by LTAS Technologies (Nov.2021 - Nov.2022)',
    body: [
      '- Re-engineered the existing frontend using Angular 13 to improve performance by 100% for services including short term rental compliance and classified ad searching.',
      '- Implemented custom ETL scripts for canadian retail stores with over 5,000,000 product variations using Python, Pandas, Beautiful Soup and Selenium.',
      '- Built custom API/GUI testing workflows using Playwright to automate bug reports, speed tests, and web-app security.'
    ]
  }

  cdrcpExperience: Experience = {
    position: 'Website/Statistics Project Specialist',
    locationAndDate: 'CDRCP (Jun.2021 - Nov.2021)',
    body: [
      '- Created the InfoPeel website, utilizing Wordpress along with custom PHP, Javascript, and HTML.',
      '- Automated Peel event integration with Wordpress achieving a 500% speed increase.',
      '- Implemented SEO best practices and speed optimizations to increase visitor rate by 100%.'
    ]
  }

  tdExperience: Experience = {
    position: 'Customer Service Representative',
    locationAndDate: 'TD Canada Trust (Jun.2018 - Jun.2019)',
    body: [
      '- Delivered exceptional customer service handling transactions and advising clients on various financial products and services.'
    ]
  }

  realEstateScrapingProject: Experience = {
    position: 'Real Estate Data Mining/ETL',
    locationAndDate: 'Avenu Insights & Analytics (2023)',
    body: [
      '- Designed web scrapers for 9 real estate websites averaging 500ms for total data collection per page.',
      '- Leveraged techniques like multithreading, using VPNs, and smart headless browsers with Playwright to improve async scraping efficiency by 700%.'
    ]
  }

  stockMarketDbProject: Experience = {
    position: 'Stock Market Database',
    locationAndDate: 'Ryerson University (2021)',
    body: [
      '- Designed web scrapers for 9 real estate websites averaging 500ms for total data collection per page.',
      '- Leveraged techniques like multithreading, using VPNs, and smart headless browsers with Playwright to improve async scraping efficiency by 700%.'
    ]
  }
  constructor(public utilService: UtilsService) {
  }

  ngOnInit() {
   this.downArrowSub()
    this.allExperiences.experiences.push(
      {...this.lexingtonExperience},
      {...this.harmariExperience},
      {...this.cdrcpExperience},
      {...this.tdExperience})

    this.allProjects.experiences.push(
      {...this.realEstateScrapingProject},
      {...this.stockMarketDbProject})

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
