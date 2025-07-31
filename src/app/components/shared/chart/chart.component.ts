import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ChartModule } from "primeng/chart";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule,TranslateModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  data: any;
  options: any;
constructor(private tarnslate:TranslateService){}
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.tarnslate.get([
  'chart.labels',
  'chart.online',
  'chart.offline'
]).subscribe(trans => {
  this.data = {
    labels: trans['chart.labels'],
    datasets: [
      {

        backgroundColor: documentStyle.getPropertyValue('--blue-500'),
        borderColor: documentStyle.getPropertyValue('--blue-500'),
        data: [25, 20, 15, 10, 5,12,2],
        barThickness: 12,
barPercentage: 0.5,
        categoryPercentage:.5,
          label: trans['chart.online'],
      },
      {
        label: trans['chart.offline'],
        backgroundColor: documentStyle.getPropertyValue('--green-500'),
        borderColor: documentStyle.getPropertyValue('--green-500'),
        data: [10, 15, 12, 8, 3,25,5,20],
        barThickness: 12,
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
       position: 'bottom',
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
        stacked: false,
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false
        }
      }
    }
  };
});
  }
}
