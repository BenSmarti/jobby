import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  animations: [
    trigger('fade', [
      state('hidden', style({
        opacity: '0',
        display: 'none'
      })),
      state('shown', style({
        opacity: '1',
        display: '*'
      })),
      transition('hidden => shown', animate('250ms ease-in')),
      transition('shown => hidden', animate('250ms ease-out'))
    ]),
  ]
})
export class JobComponent implements OnInit {

  mobileFiltersState = 'hidden';

  jobs = [1,2,3];

  constructor() { }

  ngOnInit() {
  }

  setMobileFiltersState(): void {
    this.mobileFiltersState = (this.mobileFiltersState === 'hidden') ? 'shown' : 'hidden';
  }
}
