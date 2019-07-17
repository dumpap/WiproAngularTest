import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Training } from './training';
import { TrainingService } from './training.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './training-create.component.html',
  styleUrls: ['./training-create.component.css']
})
export class TrainingCreateComponent implements OnInit {
  pageTitle = 'Training Detail';
  errorMessage = '';
  trainingModel = new Training();
 

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    
  }
  
  createTraining(){
    //this.trainingModel = trainingForm.;
    this.trainingModel.TrainingId = 0;
    this.trainingService.createTraining(this.trainingModel)
    .subscribe(
      training => this.trainingModel = training,
      error => this.errorMessage = <any>error
      );
  }
}
