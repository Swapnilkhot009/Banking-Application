import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LimitDetailsService } from '../services/limit-details.service';
import { Limits } from './limits';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-limit-details',
  templateUrl: './limit-details.component.html',
  styleUrls: ['./limit-details.component.css']
})
export class LimitDetailsComponent implements OnInit {
  
  public limitDetails!: Limits;
  public customerNumber:any;
  errorMessage!: string;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1,2],
      type: 'pie'
    }]
  }
  
  constructor(private httpClient: HttpClient, private limitService: LimitDetailsService) { }

  ngOnInit(): void {
    this.getLimitDetails();
  }

  getLimitDetails(){
    this.limitService.getLimitDetails().subscribe({
      next: (data) => {
        this.limitDetails = data;
      },
      error: error => this.errorMessage = <any>error
    });
  }

}
