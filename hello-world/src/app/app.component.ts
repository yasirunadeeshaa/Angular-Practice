import { Component } from '@angular/core';
import { CommentsComponent} from './app.comments';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone:true,
  styleUrls: ['./app.component.css'],
  template:`

    <nav class="navbar">
      <div class="logo">MyWebsite</div>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="hamburger" (click)="toggleNavbar()">
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
    <router-outlet />
    <div class="discription">
      <h1>How I feel about Angular</h1>
      <h4>USERNAME : {{username}}</h4>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        
      </article>

      @defer (on viewport) {<comments/>} 
      @placeholder {<p>Future comments</p>} 
      @loading (minimum 2s) {<p>Loading comments...</p>}

    </div><div>
      <ul >
      <li>
        Static Image:
        <img src="/assets/logo.svg" alt="loading....." />
      </li>
      <li>
        Dynamic Image:
        <img [src]="logoUrl" [alt]="logoAlt" />
      </li>
    </ul>
    
    </div>`,
    
  imports: [CommentsComponent,RouterOutlet,],
  

})
export class AppComponent {

  username = "YASIRU NADEESHA ATHTHANAYAKA";
  logoUrl ="";
  logoAlt ="loading......";
  
  toggleNavbar() {
    const navLinks = document.querySelector('.nav-links') as HTMLElement;
    navLinks.classList.toggle('active');
  }
}
