import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, HomeComponent, PayBillComponent,ViewBillComponent,GenerateBillComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bill-management-system';
}
