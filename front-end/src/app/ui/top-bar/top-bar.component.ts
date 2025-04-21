import {Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {IdentityService} from '../../services/identity.service';

@Component({
  selector: 'app-top-bar',
  imports: [
    MatToolbar,
    MatIcon,
    MatDrawerContainer,
    MatDrawerContent,
    MatNavList,
    MatIconButton,
    MatListItem,
    MatDrawer,
    RouterLink
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  userName = localStorage.getItem('username');

  constructor(private identityService: IdentityService) {}

  logout() {
    this.identityService.logout().subscribe(value =>
      window.location.reload()
    );
  }
}
