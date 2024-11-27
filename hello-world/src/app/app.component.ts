import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  styleUrls: ['./app.component.css'],
  template:`

    <nav class="navbar">
      <div class="logo">MyWebsite</div>
        <ul class="nav-links">
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/user">User</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="hamburger" (click)="toggleNavbar()">
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
    <router-outlet />`,


  imports: [RouterOutlet,RouterLink],


})
export class AppComponent {



  toggleNavbar() {
    const navLinks = document.querySelector('.nav-links') as HTMLElement;
    navLinks.classList.toggle('active');
  }
}
