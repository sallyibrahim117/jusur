import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicTableComponent } from "./components/dynamic-table/dynamic-table.component";
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { ClientsDetailsComponent } from "./components/clients-details/clients-details.component";


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [TranslateModule, DynamicTableComponent, RouterModule, PaginatorModule, ClientsDetailsComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
 first: number = 0;

    rows: number = 7;

    onPageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }
}





