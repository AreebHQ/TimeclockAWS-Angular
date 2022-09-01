import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './Services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-clock';

  private roles: string[] = [];
  inCreateUser = false;
  isLoggedIn = false;
  showAdminUser = false;
  showUserUser = false;
  username?: string;
  constructor(private tokenStorageService: TokenStorageService, private router:Router)  { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminUser = this.roles.includes('Admin');
      this.showUserUser = this.roles.includes('User');
      this.username = user.username;
    } else {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['']);}); 
    }

  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();  
  }

}

