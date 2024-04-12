import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/models/account.model';
import { ResponseModel } from 'src/app/models/response.model';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {

  account: AccountModel = new AccountModel();

  loading: boolean = false;
  errorMessage?: string;
  
  constructor(private router: Router,
    private authService: AuthService) {
  }

  signIn(): void {
    this.loading = true;
    this.authService.signIn(this.account)
    .subscribe(
      (res: ResponseModel) => {
        SessionService.setCurrentUser(res.data);
        this.router.navigate(['/conversations']);
      },
      (error: any) => {
        this.loading = false;
        this.errorMessage = error.error.message;
      }
    );
  }
}
