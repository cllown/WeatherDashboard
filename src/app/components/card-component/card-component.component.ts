import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { WeatherResponse } from '../../models';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [CommonModule, ButtonModule, Card],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss',
})
export class CardComponentComponent {
  @Input() city: WeatherResponse | undefined;
  @Output() remove = new EventEmitter<WeatherResponse>();

  removeCard(): void {
    if (this.city) {
      this.remove.emit(this.city);
    }
  }
}
