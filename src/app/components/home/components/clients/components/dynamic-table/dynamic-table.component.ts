import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';
import { AllClientsService } from '../../../../../../services/all-clients.service';
import { allClients } from '../../../../../../../data';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [TableModule,CommonModule,TranslateModule],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent {

products=allClients

  cols: any[] = [
    { field: 'item', header: 'table.fullName' },
    { field: 'productid', header: 'table.identity' },
    { field: 'DATEADDED', header: 'table.dateAdded' },
    { field: 'price', header: 'table.phoneNumber' },
    { field: 'actions', header: 'table.actions' },
  ];


  //  constructor(private allClients: AllClientsService) {}

  // ngOnInit(): void {
  //   this.getClients();
  // }

  // getClients(): void {
  //   this.allClients.allclients().subscribe({
  //     next: (res: any) => {
  //       this.products = res;
  //     },
  //     error: () => {},
  //     complete: () => {}
  //   });
  // }
}
