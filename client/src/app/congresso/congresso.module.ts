import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CongressoRoutingModule } from './congresso-routing.module';
import { FilterModule } from '../filter/filter.module';
import { SharedModule } from '../shared/components/shared.module';

import { CongressoComponent } from './congresso.component';
import { CongressoChartComponent } from './congresso-chart/congresso-chart.component';

@NgModule({
  declarations: [
    CongressoComponent,
    CongressoChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CongressoRoutingModule,
    FilterModule
  ]
})
export class CongressoModule { }