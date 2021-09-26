import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
// import * as $ from 'jquery'

// import {
//   MatButtonModule,
//   MatCardModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule
// } from '@angular/material';
import { NftModule } from "./nft/nft.module";
import { NavComponent } from "./common/components/nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { UtilModule } from "./common/services/util.module";
import { Web3Service } from "./common/services/web3.service";
import { NftsComponent } from "./nft/components/nfts/nfts.component";
import { ContractComponent } from "./nft/components/contract/contract.component";
import { HeaderComponent } from "./header/header.component";
import { HowitworksComponent } from "./howitworks/howitworks.component";
import { HomeComponent } from "./home/home.component";
import { MyloansComponent } from "./myloans/myloans.component";
import { MarketplaceComponent } from "./marketplace/marketplace.component";
import { dataService } from "./services/data.service";
import { LendingComponent } from "./lending/lending.component";
import { SynComponent } from './synthetic/syn/syn.component';

const appRoutes: Routes = [
  {
    path: "nft",
    component: NftsComponent,
    data: { title: "nft" },
  },
  {
    path: "sc",
    component: ContractComponent,
    data: { title: "Contract" },
  },
  { path: "", component: HomeComponent },
  { path: "my-loans", component: MyloansComponent },
  { path: "lendings", component: LendingComponent },
  { path: "how-it-works", component: HowitworksComponent },
  { path: "marketplace", component: MarketplaceComponent },
  { path: "mint", component: SynComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HowitworksComponent,
    HomeComponent,
    MyloansComponent,
    MarketplaceComponent,
    LendingComponent,
    SynComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    CommonModule,
    // MatButtonModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatToolbarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NftModule,
    LayoutModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    UtilModule,
  ],
  providers: [Web3Service, dataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
