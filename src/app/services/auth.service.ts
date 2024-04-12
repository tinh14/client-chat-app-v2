import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountModel } from '../models/account.model';
import { API_BASE_URL } from '../config';
import { ChangePasswordRequest } from '../requests/change-password.request';
import { ResponseModel } from '../models/response.model';
import { SignupRequest } from '../requests/signup.request';
import { DeleteAccountRequest } from '../requests/delete-account.request';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private SIGN_IN_URL = `${API_BASE_URL}/signin`;
    private SIGN_UP_URL = `${API_BASE_URL}/signup`;
    private ACCOUNT_BASE_URL = `${API_BASE_URL}/accounts`;

    constructor(private http: HttpClient) {}

    signIn(account: AccountModel): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.SIGN_IN_URL, account);
    }

    signUp(request: SignupRequest): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.SIGN_UP_URL, request);
    }

    changePassword(request: ChangePasswordRequest): Observable<ResponseModel> {
        return this.http.patch<ResponseModel>(this.ACCOUNT_BASE_URL, request);
    }

    signOut(): void {
        SessionService.setCurrentUser(null);
    }

    deleteAccount(deleteAccountRequest: DeleteAccountRequest): Observable<ResponseModel> {
        const options = {
            headers: { 'Content-Type': 'application/json' },
            body: deleteAccountRequest
        };
        return this.http.delete<ResponseModel>(this.ACCOUNT_BASE_URL, options);
    }
}
