import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherResponse } from '../../models';

@Component({
  selector: 'app-listbox',
  standalone: true,
  imports: [CommonModule, FormsModule, ListboxModule, InputTextModule],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.scss',
})
export class ListboxComponent {
  @Input() cities: WeatherResponse[] = [];
  @Output() citySelected = new EventEmitter<WeatherResponse>();

  onChange(event: any): void {
    this.citySelected.emit(event.value);
  }
}
