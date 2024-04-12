import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../config";
import { HttpClient } from "@angular/common/http";
import { ResponseModel } from "../models/response.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FileFetcherService {

    private FILE_INLINE_BASE_URL: string = `${API_BASE_URL}/files/inline`;
    private FILE_ATTACHMENT_BASE_URL: string = `${API_BASE_URL}/files/attachment`;
    

    constructor(private http: HttpClient) { }
    
    fetchAsBytes(fileCode: string): Observable<ArrayBuffer> {
        const url: string = `${this.FILE_ATTACHMENT_BASE_URL}/${fileCode}`;
        return this.http.get(url, {responseType: 'arraybuffer'});
    }
}