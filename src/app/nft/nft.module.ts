import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatSelectModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NftsComponent } from './components/nfts/nfts.component';
import { ContractComponent } from './components/contract/contract.component';

@NgModule({
  declarations: [  NftsComponent, ContractComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: []
})
export class NftModule { }
