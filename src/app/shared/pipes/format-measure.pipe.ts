import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMeasure',
  standalone: true,
})
export class FormatMeasurePipe implements PipeTransform {
  transform(value: number | undefined, unit: 'm' | 'kg'): string {
    if(value === undefined) {
      return 'N/A';
    }
    
    if (isNaN(value)) {
      return 'N/A';
    }

    switch (unit) {
      case 'kg':
        return `${value / 10} kg`;
      case 'm':
        return `${value / 10} m`;
      default:
        return 'N/A';
    }
  }
}
