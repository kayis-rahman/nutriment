import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HelloService} from './services/hello.service';
import {TopBarComponent} from './ui/top-bar/top-bar.component';
import {NgIf} from '@angular/common';
import {IdentityService} from './services/identity.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: String = 'front-end';

  constructor(private identityService: IdentityService) {
    AppComponent.isAuthenticated = identityService.isAuthenticated();
  }

  public static isAuthenticated = false;
  ngOnInit(): void {
  }

  isAuthenticated() {
    return AppComponent.isAuthenticated;
  }
}
