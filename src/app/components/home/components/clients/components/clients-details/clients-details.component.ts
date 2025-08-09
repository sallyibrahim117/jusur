import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { allClients } from '../../../../../../../data';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-clients-details',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './clients-details.component.html',
  styleUrl: './clients-details.component.scss'
})
export class ClientsDetailsComponent {
clients=allClients
}
