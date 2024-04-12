import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/models/response.model';
import { SignupRequest } from 'src/app/requests/signup.request';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent{

  request: SignupRequest = new SignupRequest();
  
  loading: boolean = false;
  errorMessage?: string;
  
  constructor(private router: Router, 
    private authService: AuthService) {
  }

  signUp(): void {
    this.loading = true;
    this.authService.signUp(this.request)
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
