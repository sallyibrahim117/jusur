import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { ChartComponent } from "../../../shared/chart/chart.component";

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [TranslateModule, ChartModule, CommonModule, ChartComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {

}
