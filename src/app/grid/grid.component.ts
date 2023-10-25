import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent | undefined;

  public data: any[] = [];

  public size = 'large';
  public sizes: any[] = [
    {
        label: 'small',
        selected: this.size === 'small',
        togglable: true
    },
    {
        label: 'medium',
        selected: this.size === 'medium',
        togglable: true
    },
    {
        label: 'large',
        selected: this.size === 'large',
        togglable: true
    }
  ];

  constructor() {}
  
  public ngOnInit(): void {
    this.data = [{name: "Bruno", age: 26},{name: "Angel", age: 35}, {name: "Jose", age: 45}, {name: "carla", age: 25}];
  }

  @HostBinding('style.--ig-size')
  protected get sizeStyle() {
      return `var(--ig-size-${this.size})`;
  }

  public selectSize(event: any) {
      this.size = this.sizes[event.index].label;
      if (this.grid1) this.grid1.reflow();
  }
}
