import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { EngineersComponent } from './components/engineers/engineers.component';
import { ManagersComponent } from './components/managers/managers.component';
import { CustomersComponent } from './components/customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routers: Routes = [
  { path: 'admin', component: AdminComponent },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/registerComplaints',
    component: ComplaintsComponent,
  },

  {
    path: 'feedbacks/sendFeedback',
    component: FeedbacksComponent,
  },
  {
    path: 'engineers',
    component: EngineersComponent,
  },
  {
    path: 'managers',
    component: ManagersComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ComplaintsComponent,
    FeedbacksComponent,
    EngineersComponent,
    ManagersComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routers),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
