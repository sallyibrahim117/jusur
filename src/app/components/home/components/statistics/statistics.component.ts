import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { ChartComponent } from "../../../shared/chart/chart.component";
import { SecondChartComponent } from "../../../shared/second-chart/second-chart.component";
import { ThirdChartComponent } from "../../../shared/third-chart/third-chart.component";

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [TranslateModule, ChartModule, CommonModule, ChartComponent, SecondChartComponent, ThirdChartComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {

}
