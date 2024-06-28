import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  constructor(private router: Router) {}

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectValue = target.value;

    switch (selectValue) {
      case 'MASCULINO':
        this.router.navigate([`/usuario/${selectValue}`]);
        break;

      case 'FEMENINO':
        this.router.navigate([`/usuario/${selectValue}`]);
        break;
      default:
        break;
    }
  }
}
