import { Component, Input, OnInit } from "@angular/core";
import { NftService } from "../../nft/services/nft.service";
import { MatSnackBar } from "@angular/material";
import { Web3Service } from "../../common/services/web3.service";
import { dataService } from "../../services/data.service";
import { ErcService } from "../../services/erc.service";

declare var $: any;

@Component({
  selector: 'app-syn',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent implements OnInit {
  userAddress: any;
  sc: '0x0a7c75b0C83E94474832f0B7329371Ef804bb2a9';
  synToken: '0x562B8AdFBeFA6c3f411F9F7ae5205c319695a19E'
  ratio: number;
  fee: any
  XagUsd: any;
  ethUsd: any;
  constructor(private nftService: NftService,
    private ercService: ErcService,
    private dataS: dataService) {
    this.sc = '0x0a7c75b0C83E94474832f0B7329371Ef804bb2a9';
    this.synToken = '0x562B8AdFBeFA6c3f411F9F7ae5205c319695a19E';
    this.ratio = 200;
    this.fee = 0.15;
  }



  ngOnInit() {
    this.user()
    this.getWrtBalance()
    this.getSynBalance()
    this.totalSupply()
    this.getXagPrice()
  }


  user() {
    this.userAddress = localStorage.getItem("userAccount");
    console.log("################## userAddress #####", this.userAddress);
  }
  getWrtBalance() {
    console.log('balance', this.userAddress, this.sc);
    this.ercService.balanceOf(this.userAddress, this.sc).then((data) => {
      console.log(data);
    });
  }

  getSynBalance() {
    console.log('balance', this.userAddress, this.synToken);
    this.ercService.balanceOf(this.userAddress, this.synToken).then((data) => {
      console.log(data);
    });
  }

  totalSupply() {
    this.ercService.totalSupply(this.sc).then((data) => {
      console.log(data);
    });
  }

  getXagPrice() {
    this.dataS.getXagPrice().subscribe((data) => {
      console.log('getXagPrice ', data['data'][0]['rate']);
    });
  }

  mint() {
    this.dataS.getXagPrice().subscribe((data) => {
      console.log('getXagPrice ', data['data'][0]['rate']);
      this.XagUsd =data['data'][0]['rate'];
      this.ethUsd =data['data'][1]['rate'];
    });
  }

}
