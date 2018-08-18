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

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
