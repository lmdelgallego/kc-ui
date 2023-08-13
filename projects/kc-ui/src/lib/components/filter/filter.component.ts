import { Component, EventEmitter, Input, Output } from '@angular/core';

interface FilterStatusType {
  [key: string]: any;
}

@Component({
  selector: 'kc-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  @Input('label') label: string = 'Filter';
  @Input('options') options: string[] = [];
  @Output('selected') onSelectFilter: EventEmitter<string> = new EventEmitter<string>();


  status: string = '';

  getOptionLabel(option: string) {
    return option[0].toUpperCase() + option.slice(1);
  }

  changeSelected(status: string) {

    if (this.status === status) {
      this.status = '';
      this.onSelectFilter.emit();
      return;
    }
    this.status = status;
    this.onSelectFilter.emit(status);
  }
}
