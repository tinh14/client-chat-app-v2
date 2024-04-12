import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subject } from "rxjs";
import { tap } from 'rxjs/operators';

import { API_BASE_URL } from "../config";

import { ContactModel } from "../models/contact.model";
import { ResponseModel } from "../models/response.model";
import { ObservableUtil } from "../utils/observable.util";
import { FileFetcherService } from "./file-fetcher.service";

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private CONTACT_BASE_URL: string = `${API_BASE_URL}/contacts`;
    
    contacts: Map<string, ContactModel> = new Map<string, ContactModel>();
    receivedContactRequests: Map<string, ContactModel> = new Map<string, ContactModel>();
    sentContactRequests: Map<string, ContactModel> = new Map<string, ContactModel>();

    private contactsSubject: Subject<ContactModel[]> = 
        new Subject<ContactModel[]>();
    contacts$ = this.contactsSubject.asObservable();

    private receivedContactRequestsSubject: Subject<ContactModel[]> = 
        new Subject<ContactModel[]>();
    receivedContactRequests$ = this.receivedContactRequestsSubject.asObservable();

    private sentContactRequestsSubject: Subject<ContactModel[]> = 
        new Subject<ContactModel[]>();
    sentContactRequests$ = this.sentContactRequestsSubject.asObservable();

    constructor(private http: HttpClient) {}

    findContacts(userId: string): Observable<ResponseModel> {
        return this.http.get<ResponseModel>(`${this.CONTACT_BASE_URL}/participants/${userId}`).pipe(
            tap((res: ResponseModel) => {
                const foundContacts: ContactModel[] = res.data;
                this.contacts = new Map(foundContacts.map(contact => [contact.id, contact]));
                ObservableUtil.notify(this.contactsSubject, foundContacts);
            })
        );
    }

    findReceivedContactRequests(userId: string): Observable<ResponseModel> {
        return this.http.get<ResponseModel>(`${this.CONTACT_BASE_URL}/received/participants/${userId}`).pipe(
            tap((res: ResponseModel) => {
                const foundReceivedContactRequests: ContactModel[] = res.data;
                this.receivedContactRequests = new Map(foundReceivedContactRequests.map(request => [request.id, request]));
                ObservableUtil.notify(this.receivedContactRequestsSubject, foundReceivedContactRequests);
            })
        );
    }

    findSentContactRequests(userId: string): Observable<ResponseModel> {
        return this.http.get<ResponseModel>(`${this.CONTACT_BASE_URL}/sent/participants/${userId}`).pipe(
            tap((res: ResponseModel) => {
                const foundSentContactRequests: ContactModel[] = res.data;
                this.sentContactRequests = new Map(foundSentContactRequests.map(request => [request.id, request]));
                ObservableUtil.notify(this.sentContactRequestsSubject, foundSentContactRequests);
            })
        );
    }

    sendRequest(contact: ContactModel): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(`${this.CONTACT_BASE_URL}`, contact)
            .pipe(
                tap((res: ResponseModel) => {
                    const newContactId: string = res.data;
                    contact.id = newContactId;
                    this.sentContactRequests.set(newContactId, contact);
                    ObservableUtil.notify(this.sentContactRequestsSubject, this.sentContactRequests);
                })
            );
    }

    acceptRequest(contactId: string): Observable<ResponseModel> {
        return this.http.patch<ResponseModel>(`${this.CONTACT_BASE_URL}/${contactId}`, null).pipe(
            tap(() => {
                this.receivedContactRequests.delete(contactId);
                ObservableUtil.notify(this.receivedContactRequestsSubject, this.receivedContactRequests);
            })
        );
    }

    declineRequest(contactId: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(`${this.CONTACT_BASE_URL}/${contactId}`).pipe(
            tap(() => {
                this.receivedContactRequests.delete(contactId);
                ObservableUtil.notify(this.receivedContactRequestsSubject, this.receivedContactRequests);
            })
        );
    }

    deleteSentRequest(contactId: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(`${this.CONTACT_BASE_URL}/${contactId}`).pipe(
            tap(() => {
                this.sentContactRequests.delete(contactId);
                ObservableUtil.notify(this.sentContactRequestsSubject, this.sentContactRequests);
            })
        );
    }

    deleteContact(contactId: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(`${this.CONTACT_BASE_URL}/${contactId}`).pipe(
            tap(() => {
                this.contacts.delete(contactId);
                ObservableUtil.notify(this.contactsSubject, this.contacts);
            })
        );
    }

}