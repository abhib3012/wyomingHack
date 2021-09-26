import { Component, Input, OnInit } from '@angular/core';
import { NftService } from '../../services/nft.service';
import { MatSnackBar } from '@angular/material';
import { Web3Service } from '../../../common/services/web3.service';

// import $ from "jquery";
declare var $: any;
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  whr: any;
  balanceOf: any;
  totalCal: any;
  totalInt: any;
  paused: any;
  repaymentAmount: any;
  loanAmount: any;
  feeDepositor: any;
  lenderAddress: any;
  // web3Service: any;
  userAddress: any;
  totalSupply: any;
  mintStatus: boolean = false;
  tx: any;
  owner: any;

  constructor(private nftService: NftService,
    private snackBar: MatSnackBar, private web3Service: Web3Service) {
  }
  ngOnInit() {
    this.user()
    // console.log('("################## sc', localStorage.getItem("sc") ? localStorage.getItem("sc") : '0x57F801F99c1a53aa9f124aE3c6662Dec9B5ddCA9');
    // this.alld();
  }
  user() {
    this.userAddress = localStorage.getItem("sc");
    console.log("################## NFT #####", this.userAddress);
  }
  data: any = [
    {
      "id": 0,
      "commodity": "Wheat",
      "picture": "../../../../assets/images/Wheat.jpg",
      "totalQtl": 3,
      "variety": "Normal",
      "location": "Maharastra, India",
      "sc": "0xCaf069A5C7C90546A66B96e2A17fbCe4Aea91cb8"
    }
  ]

  // whrDetails(h) {

  //   this.nftService.getWhrDetails().then((data) => {
  //     this.whr = data;
  //     this.whr['picture'] = h.picture;
  //     this.whr['sc'] = h.sc;
  //     this.whr['commodity'] = h.commodity;
  //     console.log(data);
  //     // this.balanceOf=balanceOf;
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });

  //   this.nftService.balanceOf().then((data) => {
  //     // this.whr=data;
  //     console.log(data);
  //     this.balanceOf = data;
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });


  //   this.nftService.totalCal().then((data) => {
  //     // this.whr=data; 
  //     console.log(data);

  //     this.totalCal = data / Math.pow(10, 18);
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });


  //   this.nftService.totalInt().then((data) => {
  //     // this.whr=data;
  //     this.totalInt = data / Math.pow(10, 18);
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });
  //   this.nftService.paused().then((data) => {
  //     // this.whr=data;
  //     this.paused = data;
  //     console.log('paused', data);
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });

  //   this.nftService.lenderAddress().then((data) => {
  //     // this.whr=data;
  //     this.lenderAddress = data;
  //     console.log('feeDepositor', this.lenderAddress);
  //     // this.feeDepositor = data;
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });

  //   this.nftService.repaymentAmount().then((data) => {
  //     // this.whr=data;
  //     this.repaymentAmount = data / Math.pow(10, 18);
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });

  //   this.nftService.loanAmount().then((data) => {
  //     // this.whr=data;
  //     this.loanAmount = data / Math.pow(10, 18);
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });

  //   this.nftService.totalSupply().then((totalSupply) => {
  //     this.totalSupply = totalSupply;
  //     if (this.totalSupply == 0) {
  //       this.mintStatus = true;
  //     }
  //     console.log('totalSupply', totalSupply, this.mintStatus);
  //   });
  //   this.userAddress = this.nftService.userAddress();
  //   console.log(this.userAddress);

  //   this.nftService.owner().then((data) => {
  //     this.owner = data;
  //     console.log('owner', this.owner);
  //   });
  // }

  // // alld() { 

  // //   for (var i = 0; i <= this.data.lenght; i++) {
  // //     this.whrAllDetails(this.data[i]);
  // //   }
  // // }

  // // whrAllDetails(h) {
  // //   console.log('asasas',h.sc);

  // //   this.nftService.getScAdd(h.sc).then((data) => {

  // //     this.nftService.getWhrDetails().then((data) => {
  // //       h['data'] = data;
  // //       h['picture'] = h.picture;
  // //       h['commodity'] = h.commodity;
  // //       console.log(data);
  // //       // this.balanceOf=balanceOf;
  // //       // this.snackBar.open('You review has been sent', '', {
  // //       //   duration: 2000,
  // //       // });
  // //     });

  // //     this.nftService.balanceOf().then((data) => {
  // //       // this.whr=data;
  // //       console.log(data);
  // //       h['balanceOf'] = data;
  // //       // this.snackBar.open('You review has been sent', '', {
  // //       //   duration: 2000,
  // //       // });
  // //     });


  // //     // this.nftService.totalCal().then((data) => {
  // //     //   // this.whr=data; 
  // //     //   console.log(data);

  // //     //   this.whr['totalCal'] = data / Math.pow(10, 18);
  // //     //   // this.snackBar.open('You review has been sent', '', {
  // //     //   //   duration: 2000,
  // //     //   // });
  // //     // });


  // //     // this.nftService.totalInt().then((data) => {
  // //     //   // this.whr=data;
  // //     //   this.whr['totalInt'] = data / Math.pow(10, 18);
  // //     //   // this.snackBar.open('You review has been sent', '', {
  // //     //   //   duration: 2000,
  // //     //   // });
  // //     // });
  // //     // this.nftService.paused().then((data) => {
  // //     //   // this.whr=data;
  // //     //   this.whr['paused'] = data;
  // //     //   console.log('paused', data);
  // //     //   // this.snackBar.open('You review has been sent', '', {
  // //     //   //   duration: 2000,
  // //     //   // });
  // //     // });

  // //     // this.nftService.lenderAddress().then((data) => {
  // //     //   // this.whr=data;
  // //     //   this.whr['lenderAddress'] = data;
  // //     //   console.log('feeDepositor', this.lenderAddress);
  // //     //   // this.feeDepositor = data;
  // //     //   // this.snackBar.open('You review has been sent', '', {
  // //     //   //   duration: 2000,
  // //     //   // });
  // //     // });

  // //     // this.nftService.repaymentAmount().then((data) => {
  // //     //   // this.whr=data;
  // //     //   this.whr['repaymentAmount'] = data / Math.pow(10, 18);
  // //     //   // this.snackBar.open('You review has been sent', '', {
  // //     //   //   duration: 2000,
  // //     //   // });
  // //     // });

  // //     // this.nftService.loanAmount().then((data) => {
  // //     //   // this.whr=data;
  // //     //   this.whr['loanAmount'] = data / Math.pow(10, 18);
  // //     //   // this.snackBar.open('You review has been sent', '', {
  // //     //   //   duration: 2000,
  // //     //   // });
  // //     // });

  // //     // this.nftService.totalSupply().then((totalSupply) => {
  // //     //   this.whr['totalSupply'] = totalSupply;
  // //     //   if (this.totalSupply == 0) {
  // //     //     this.whr['mintStatus'] = true;
  // //     //   }
  // //     //   console.log('totalSupply', totalSupply, this.mintStatus);
  // //     // });

  // //     // this.whr['userAddress'] = this.nftService.userAddress();

  // //   });


  // // }



  // mintShatusCheck(h) {
  //   // console.log("mint h.sc",h.sc);
  //   // localStorage.getItem("sc")
  //   this.nftService.totalSupply().then((totalSupply) => {
  //     this.totalSupply = totalSupply;
  //     if (this.totalSupply == 0) {
  //       console.log("mint");
  //       return true;
  //     } else {
  //       console.log("already minted");
  //       return false;
  //     }
  //   });
  // }

  // showWhrDetails(h) {
  //   console.log(h);
  //   localStorage.setItem("sc", h.sc)
  //   this.whrDetails(h);
  //   // window.location.href = '/sc';
  //   $('#msg').modal('show');
  // }

  // borrowerWithdraw() {
  //   this.nftService.borrowerWithdraw().then((data) => {
  //     // this.whr=data;
  //     this.paused = data;
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });
  // }

  // lenderWithdraw() {
  //   this.nftService.lenderWithdraw().then((data) => {
  //     // this.whr=data;
  //     this.paused = data;
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });
  // }


  // sentEth() {
  //   let sc = localStorage.getItem("sc")
  //   console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());

  //   this.nftService.transfer(sc, this.userAddress
  //     , (this.whr.ethprice * (70 / 100)).toString()).then((data) => {
  //       // this.whr=data;
  //       this.paused = data;
  //       // this.snackBar.open('You review has been sent', '', {
  //       //   duration: 2000,
  //       // });
  //     });
  // }


  // repaymentEth() {
  //   let sc = localStorage.getItem("sc")
  //   console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());
  //   this.nftService.transfer(sc, this.userAddress
  //     , (this.whr.ethprice * (70 / 100)).toString()).then((data) => {
  //       // this.whr=data;
  //       this.paused = data;
  //       // this.snackBar.open('You review has been sent', '', {
  //       //   duration: 2000,
  //       // });
  //     });
  // }

  // mint(h) {

  //   localStorage.setItem("sc", h.sc);
  //   this.nftService.owner().then((data) => {
  //     this.nftService.mint(data).then((data) => {
  //       $('#seccessmsg').modal('show');
  //       console.log('data', data);
  //       this.tx = data["transactionHash"];
  //       // this.snackBar.open('New Token created', '', {
  //       //   duration: 2000,
  //       // });
  //     });
  //   });
  // }


}
