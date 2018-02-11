import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { InterviewService } from '../../../shared/_services/http/interview.service';

import { Seeker } from '../../../shared/_models/seeker.model';
import { Job } from '../../../shared/_models/job.model';
import { Interview } from '../../../shared/_models/interview.model';

@Component({
  selector: 'app-new-interview',
  templateUrl: './new-interview.component.html',
  styleUrls: ['./new-interview.component.css'],
  providers: [InterviewService]
})
export class NewInterviewComponent implements OnInit {

  seeker: Seeker;
  job: Job;
  interview = new Interview;

  constructor(private dialog: MatDialogRef<NewInterviewComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { job: Job, seeker: Seeker },
              private interviewService: InterviewService) {}

  ngOnInit() {
    this.job = this.data.job;
    this.seeker = this.data.seeker;
  }

  submit(isValid: boolean): void {
    if (isValid) {
      // this.interviewService.setInterview().then(() => this.dialog.close());
    }
  }
}
