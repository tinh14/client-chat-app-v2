
import { map, tap } from 'rxjs/operators';
import { API_BASE_URL } from '../config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { ResponseModel } from '../models/response.model';
import { SessionService } from './session.service';
import { FileFetcherService } from './file-fetcher.service';
import { ObservableUtil } from '../utils/observable.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_BASE_URL = `${API_BASE_URL}/users`;

  private currentUserSubject: Subject<UserModel> = new Subject<UserModel>();
  $currentUser: Observable<UserModel> = this.currentUserSubject.asObservable();

  currentUser?: UserModel = SessionService.getCurrentUser();

  constructor(private http: HttpClient,
    private fileFetcherService: FileFetcherService) {}

  findOne(id: string): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${this.USER_BASE_URL}/${id}`).pipe(
      tap((res: ResponseModel) => {
        this.currentUser = res.data;
        ObservableUtil.notify(this.currentUserSubject, this.currentUser);
      })
    );
  }

  save(user: UserModel, avatar: File): Observable<ResponseModel> {
    const formData: FormData = new FormData();
    
    formData.append('user', new Blob([JSON
      .stringify(user)], {
      type: 'application/json'
    }));
    

    if (avatar) {
      formData.append('avatar', avatar);  
    }

    return this.http.patch(this.USER_BASE_URL, formData).pipe(
      tap((res: ResponseModel) => {
        console.log(res);
        this.currentUser.name = user.name;
        this.currentUser.avatarCode = res.data;
        console.log(this.currentUser);
        ObservableUtil.notify(this.currentUserSubject, this.currentUser);
      })
    );
  }

}
