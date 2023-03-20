import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexTitleSubtitle, ApexTooltip } from 'ng-apexcharts';
import { MacroTask } from 'src/app/classes/MacroTask';
import { TasksService } from 'src/app/services/tasks.service';

interface IChart {
  // title: ApexTitleSubtitle;
  series: ApexNonAxisChartSeries;
  labels: string[];
  details: ApexChart;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  chart: IChart = {
    // title: {
    //   text: 'Список дел',
    //   align: 'center',
    //   style: { fontSize: '30' }
    // },
    // 5 сделанных 2*2 важных, 3*1 неважная, 2*3 суперважные
    series: [1, 1, 1, 1],
    // &#8226;
    labels: ['Сделанные', 'Самые важные', 'Средней важности', 'Неважные'],
    details: { type: 'pie' },

    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `<div class="chart-custom-tooltip"> 
          ${w.globals.labels[seriesIndex]}: ${series[seriesIndex]}
          </div>`;
      },
    },
    legend: {
      itemMargin: { vertical: 5 },
      fontSize: '25px',
      onItemHover: { highlightDataSeries: false },
      onItemClick: { toggleDataSeries: false }
    },
    // cyan, red, orange, lightCyan, 
    colors: ['#00FFFF', '#FF0033', '#FFDC33', '#E0FFFF'],
    plotOptions: {
    }
  }



  constructor(public service: TasksService) { }

  ngOnInit(): void {
    this.service.getAllTasks().subscribe(
      result => this.ConvertToGraph(result),
    );
  }

  ConvertToGraph(items: MacroTask[]) {
    let pr0 = 0;
    let pr1 = 0;
    let pr2 = 0;
    let pr3 = 0;

    items.forEach(macroTask => {
      macroTask.microTasks?.forEach(microTask => {
        console.log(microTask);
        if (!microTask.isActive) pr0++;
        else {
          switch (macroTask.priority) {
            case 1: { pr1++; break; }
            case 2: { pr2++; break; }
            case 3: { pr3++; break; }
          }
        }
      });
    });
    // this.chart.labels = [`Сделанные:${pr0}`, `Самые важные:${pr1}`, `Средней важности:${pr2}`, `Неважные:${pr3}`];
    this.chart.series = [pr0, pr1, pr2, pr3];
  }
}
