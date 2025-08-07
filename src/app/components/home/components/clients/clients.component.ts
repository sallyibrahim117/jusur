import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [TranslateModule,TableModule,CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
 products: any[] = [
    {
      item: 'Macbook Air M1',
      productid: '#XGY-356	',
      DATEADDED: '02 Apr, 2025',
      price: 1000,
      QT: '58 PCS',
    },
    {
      item: 'Dell 32 UltraSharp',
      productid: '#XGY-356',
      DATEADDED: '15 Mar, 2025',
      price: 1000,
      QT: '90 PCS',
    },
    {
      item: 'AudioEngine HD3',
      productid: '#PXF-578',
      DATEADDED: '28 Oct, 2025',
      price: 3300,
      QT: '5 PCS',
    },
    {
      item: 'Macbook Air M1',
      productid: '#XGY-356	',
      DATEADDED: '20 Feb, 2025',
      price: 89900,
      QT: '20 PCS',
    },
    {
      item: 'Macbook Air M1',
      productid: '#XGY-356	',
      DATEADDED: '02 Apr, 2025',
      price: 1000,
      QT: '58 PCS',
    },
    {
      item: 'AudioEngine HD3',
      productid: '#PXF-578',
      DATEADDED: '28 Oct, 2025',
      price: 3300,
      QT: '5 PCS',
    },
  ];
  cols: any[] = [
    { header: 'Full Name', field: 'item' },
    { header: 'Identity', field: 'productid' },
    { header: 'DATED ADDED', field: 'DATEADDED' },
    { header: 'Phone Number', field: 'price' },
    { header: 'Actions', field: 'QT' },
  ];
}
