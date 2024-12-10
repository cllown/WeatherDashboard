import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss',
})
export class CardComponentComponent {
  @Input() weather: any;
  @Output() cityRemoved = new EventEmitter<string>();

  remove(): void {
    this.cityRemoved.emit(this.weather.city);
  }
}
