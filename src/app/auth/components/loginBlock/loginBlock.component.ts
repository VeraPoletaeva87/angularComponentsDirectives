import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login-block',
  templateUrl: './loginBlock.component.html',
  styleUrls: ['./loginBlock.component.css']
})
export class LoginBlockComponent {
  constructor(private router: Router) {}

  clickHandler() {
    this.router.navigate(['/login']);
  }
}
