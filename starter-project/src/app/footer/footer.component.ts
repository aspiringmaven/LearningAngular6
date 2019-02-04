import { Component, OnInit, Input } from '@angular/core';
import { Company } from './Company.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  company: Company;
  isCollapsed: boolean;

  constructor() {
    this.company = new Company();
    this.company.name = 'Sapient Consulting';
    this.company.industry = 'Information Technologies';
    this.company.address = 'Sector 21, Gurgaon 122001, Haryana, India';
    this.company.phone = '+91-124-4996000';
    this.company.fax = '+91-124-4996001';
    this.company.copyright = 'copyright 2019';
    this.isCollapsed = false;
  }

  ngOnInit() {
  }

  toggleDetails() {
    console.log('click');
    this.isCollapsed = !this.isCollapsed;
  }

}
