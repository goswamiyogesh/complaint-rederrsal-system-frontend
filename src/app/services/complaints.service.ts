import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaints } from '../models/complaints';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  private regComplaintUrl: string =
  'http://localhost:8089/complaints/addComplaint';

private getAllComplaintsByEmailUrl: string =
  'http://localhost:8089/complaints/getAllComplaintsByEmail';

constructor(private _httpClient: HttpClient) {}

registerComplaint(complaint: Complaints) {
  return this._httpClient.post<Complaints>(this.regComplaintUrl, complaint);
}

getAllComplaintsByEmail(customerEmail: string): Observable<Complaints[]> {
  console.log('in complaint.service.ts ==', customerEmail);
  return this._httpClient.get<Complaints[]>(
    `${this.getAllComplaintsByEmailUrl}/${customerEmail}`
  );
  }
}
