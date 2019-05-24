import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {
  @Input() title: string;
  @Input() class: string;
  @Input() striped: boolean;

  constructor() { }

  ngOnInit() {
  }

  getClass(): string[] {
    const classes = ['legend-info', this.class];
    if (this.striped) {
      classes.push('progress-bar-striped');
    }

    return classes;
  }

}
