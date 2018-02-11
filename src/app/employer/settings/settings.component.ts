import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  activeTab: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.activeTab = this.route.snapshot.firstChild.routeConfig.path;
  }

}
