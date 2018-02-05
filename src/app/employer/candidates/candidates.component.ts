import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { NewInterviewComponent } from './new-interview/new-interview.component';

import { LocaleService } from '../../shared/_services/locale.service';
import { CandidateService } from '../../shared/_services/http/candidate.service';

import { Job } from '../../shared/_models/job.model';
import {Seeker} from '../../shared/_models/seeker.model';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['../../shared/data-table/data-table.component.css'],
  providers: [CandidateService]
})
export class CandidatesComponent extends DataTableComponent implements OnInit {

  employerActiveJobs: Job[] = [];
  selectedJobID: number = null;

  readonly tabs = [
    { label: 'CANDIDATE_POOL', criterion: ''}, { label: 'CANDIDATES_I_LIKED', criterion: 'employerLike' },
    { label: 'CANDIDATES_LIKED_ME', criterion: 'seekerLike'}, { label: 'MATCHES', criterion: 'matches' },
    { label: 'ACCEPTED_CANDIDATES', criterion: 'accepted' }
  ];

  readonly headers = [
    { column: 'candidateName', label: 'CANDIDATE_NAME' }, { column: 'jobName', label: 'JOB_NAME' },
    { column: 'phone', label: 'PHONE' } , { column: 'email', label: 'EMAIL' },
    { column: 'date', label: 'INTERVIEW_DATE' }, { column: 'status', label: 'STATUS' },
    { column: null, label: 'INTERVIEW_APPOINTMENT' }
  ];

  constructor(route: ActivatedRoute, private dialog: MatDialog, localeService: LocaleService,
              private candidateService: CandidateService) {
    super(route, localeService);
  }

  ngOnInit() {
    this.activeTab = this.tabs[0];
    this.employerActiveJobs = this.route.snapshot.data['activeJobs'];
  }


  fetchItems(): void {
    this.candidateService.getCandidates(this.selectedJobID, 'all').then(response => this.setItems(response));
  }

  setEmployerLike(): void {
    // this.candidateService
  }

  setInterview(seeker: Seeker, job: Job): void {
    this.dialog.open(NewInterviewComponent, {
        height: '600px',
        width: '800px',
        data: { seeker: seeker, job: job }
    });
  }
}
