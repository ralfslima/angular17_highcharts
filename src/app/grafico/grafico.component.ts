import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importações do highcharts
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {

  // Link do tutorial utilizado: https://www.itsolutionstuff.com/post/angular-17-highcharts-example-tutorialexample.html#google_vignette

  Highcharts: typeof Highcharts = Highcharts;
   
  chartOptions: Highcharts.Options = {
    series: [{
      data: [50, 40, 60, 45, 70, 42, 60],
      type: 'line'
    }]
  };

}
