import { Component, OnInit } from '@angular/core';

import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chart-app';
  countryList = [{ value: 'Australia', display: 'Australia' }, { value: 'Canada', display: 'Canada'}, { value: 'Spain', display: 'Spain'}, { value: 'Turkey', display: 'Turkey'}, { value: 'Brazil', display: 'Brazil'}];
  userParams: any = {};

  sdk = new ChartsEmbedSDK({
    baseUrl: "<Your chart base URL>"
  });

  chart = this.sdk.createChart({
    chartId: "Your chart ID"
  });

  renderChart() {
    this.chart.render(document.getElementById("chart"));
  }


  constructor() { }

  ngOnInit(): void {
    this.renderChart();   

    this.userParams.country = '';
  }

  refreshChart(){
    const country = this.userParams.country
    country
      ? this.chart.setFilter({ "address.country": country })
      : this.chart.setFilter({});
  
      this.chart.refresh();
  }

}
