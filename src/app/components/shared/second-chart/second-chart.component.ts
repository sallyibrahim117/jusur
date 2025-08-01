import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ChartModule } from "primeng/chart";
@Component({
  selector: 'app-second-chart',
  standalone: true,
  imports: [ChartModule,TranslateModule],
  templateUrl: './second-chart.component.html',
  styleUrl: './second-chart.component.scss'
})
export class SecondChartComponent {
data: any;
  options: any;
constructor(private tarnslate:TranslateService){}
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.tarnslate.get([
  'chart.labels2',

]).subscribe(trans => {
  this.data = {
    labels: trans['chart.labels2'],
    datasets: [
      {

        backgroundColor:'#27AE60',
        borderColor:'#27AE60',
        data: [65, 59, 80, 81, 56, 55, 40],
        barThickness: 12,
barPercentage: 0.5,
        categoryPercentage:.5,

      },
      {

        backgroundColor: '#FFA412',
        borderColor: '#FFA412',

 data: [28, 48, 40, 19, 86, 27, 90],
barPercentage: 0.5,
        categoryPercentage:.5
      }
    ]
  };

  this.options = {

    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
    legend: {
      display:false,
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        stacked: false,
        ticks: {
          color: textColorSecondary,
          font: { weight: 500 }
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false
        }
      },
      y: {
        display:false,

      }
    }
  };
});
  }
}
