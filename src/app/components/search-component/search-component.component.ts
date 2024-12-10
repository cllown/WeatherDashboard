import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.scss',
})
export class SearchComponentComponent {
  cityName: string = '';
  @Output() cityAdded = new EventEmitter<string>();

  addCity(): void {
    if (this.cityName.trim()) {
      this.cityAdded.emit(this.cityName);
      this.cityName = '';
    }
  }
}
