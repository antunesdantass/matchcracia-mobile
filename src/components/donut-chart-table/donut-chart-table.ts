import { Component, Input } from '@angular/core';

/**
 * Generated class for the DonutChartTableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'donut-chart-table',
  templateUrl: 'donut-chart-table.html',
})
export class DonutChartTableComponent {
  // Doughnut
  @Input()
  data: string[] = [];
  @Input()
  labels: number[] = [];
  doughnutChartType: string = 'doughnut';

  doughnutOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true,
      backgroundColor: '#090044',
      titleFontColor: '#ffffff',
      bodyFontColor: '#ffffff',
      xPadding: 20,
      yPadding: 20,
      displayColors: false,
    },
  };

  doughnutChartColors: any[] = [
    {
      borderWidth: 0,
      backgroundColor: [
        '#090044',
        '#B1EDE8',
        '#6D7771',
        '#A1A2A2',
        '#DECEB0',
        '#8B7448',
      ],
    },
  ];
}
