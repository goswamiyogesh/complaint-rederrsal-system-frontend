import { Injectable } from '@angular/core';
import { Feedbacks } from './../models/feedbacks';
import { Complaints } from './../models/complaints';
import { Customers } from './../models/customers';
import { Engineers } from './../models/engineers';
import { Managers } from './../models/managers';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private getAllManagersUrl: string =
  'http://localhost:8089/managers/getAllManagers';
private deleteManagerByEmailUrl: string =
  'http://localhost:8089/managers/deleteManager';
private updateManagerUrl: string =
  'http://localhost:8089/managers/updateManager';

private getAllEngineersUrl: string =
  'http://localhost:8089/engineers/getAllEngineers';
private deleteEngineerByEmailUrl: string =
  'http://localhost:8089/engineers/deleteEngineer';

private getAllCustomersUrl: string =
  'http://localhost:8089/customers/getAllCustomers';
private deleteCustomerByEmailUrl: string =
  'http://localhost:8089/customers/deleteCustomer';
private updateCustomerUrl: string =
  'http://localhost:8089/customers/updateCustomer';

private getAllComplaintsUrl: string =
  'http://localhost:8089/complaints/getAllComplaints';
private deleteComplaintByTicketIdUrl: string =
  'http://localhost:8089/complaints/deleteComplaintById';
private updateComplaintUrl: string =
  'http://localhost:8089/complaints/updateComplaint';

private getAllFeedbacksUrl: string =
  'http://localhost:8089/feedbacks/getAllFeedbacks';
private deleteFeedbackByFeedbackIdUrl: string =
  'http://localhost:8089/feedbacks/deleteFeedbackById';
private updateFeedbackUrl: string =
  'http://localhost:8089/feedbacks/updateFeedback';

constructor(private _httpClient: HttpClient) {}
getAllManagers() {
  return this._httpClient.get<Managers[]>(this.getAllManagersUrl);
}
deleteManager(managerEmail: string) {
  return this._httpClient.delete(
    `${this.deleteManagerByEmailUrl}/${managerEmail}`,
    {
      responseType: 'text',
    }
  );
}
newManagerUpdates(managerPincode: string, managerEmail: string) {
  return this._httpClient.put(
    `${this.updateManagerUrl}/${managerEmail}`,
    managerPincode
  );
}

// engineers
getAllEngineers() {
  return this._httpClient.get<Engineers[]>(this.getAllEngineersUrl);
}
deleteEngineer(engineerEmail: string) {
  return this._httpClient.delete(
    `${this.deleteEngineerByEmailUrl}/${engineerEmail}`,
    {
      responseType: 'text',
    }
  );
}

//customers
getAllCustomers() {
  return this._httpClient.get<Customers[]>(this.getAllCustomersUrl);
}
deleteCustomer(customerEmail: string) {
  return this._httpClient.delete(
    `${this.deleteCustomerByEmailUrl}/${customerEmail}`,
    {
      responseType: 'text',
    }
  );
}
newCustomerUpdates(customerPincode: string, customerEmail: string) {
  return this._httpClient.put(
    `${this.updateCustomerUrl}/${customerEmail}`,
    customerPincode
  );
}
//complaints

getAllComplaints() {
  return this._httpClient.get<Complaints[]>(this.getAllComplaintsUrl);
}
deleteComplaint(ticketId: number) {
  return this._httpClient.delete(
    `${this.deleteComplaintByTicketIdUrl}/${ticketId}`,
    {
      responseType: 'text',
    }
  );
}

newComplaintUpdates(complaintUpdating: Complaints) {
  return this._httpClient.put(this.updateComplaintUrl, complaintUpdating);
}

//feedbacks
getAllFeedbacks() {
  return this._httpClient.get<Feedbacks[]>(this.getAllFeedbacksUrl);
}
deleteFeedback(feedbackId: number) {
  return this._httpClient.delete(
    `${this.deleteFeedbackByFeedbackIdUrl}/${feedbackId}`,
    {
      responseType: 'text',
    }
  );
}
newFeedbackUpdates(feedbackUpdating: Feedbacks) {
  return this._httpClient.put(this.updateFeedbackUrl, feedbackUpdating);
}

}
