import { Component, Input, OnInit } from '@angular/core';
import { NftService } from '../../services/nft.service';
import { MatSnackBar } from '@angular/material';
import { Web3Service } from '../../../common/services/web3.service';

// import $ from "jquery";
declare var $: any;

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent implements OnInit {
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
    console.log('("################## sc', localStorage.getItem("sc") ? localStorage.getItem("sc") : '0x57F801F99c1a53aa9f124aE3c6662Dec9B5ddCA9');

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
      "variety": "Normal 2",
      "location": "Maharastra, India",
      "sc": "0xCaf069A5C7C90546A66B96e2A17fbCe4Aea91cb8"
    },
    {
      "id": 1,
      "commodity": "Oats",
      "picture": "../../../../assets/images/Oats.jpg",
      "totalQtl": 3,
      "variety": "Normal",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 2,
      "commodity": "Corn",
      "picture": "../../../../assets/images/Corn.jpg",
      "totalQtl": 2,
      "variety": "Corn 2",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 3,
      "commodity": "Barley",
      "picture": "../../../../assets/images/Barley.jpg",
      "totalQtl": 2,
      "variety": "Normal",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 4,
      "commodity": "Sorghum",
      "picture": "../../../../assets/images/Sorghum.jpg",
      "totalQtl": 2,
      "variety": "Normal",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 5,
      "commodity": "Rye",
      "picture": "../../../../assets/images/Rye.jpg",
      "totalQtl": 3,
      "variety": "Normal",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 6,
      "commodity": "Amaranth",
      "picture": "../../../../assets/images/Amaranth.jpg",
      "totalQtl": 3,
      "variety": "Normal",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 7,
      "commodity": "Millet",
      "picture": "../../../../assets/images/Millet.jpg",
      "totalQtl": 3,
      "variety": "Normal",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 8,
      "commodity": "Triticale",
      "picture": "../../../../assets/images/Triticale.jpg",
      "totalQtl": 2,
      "variety": "Normal",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 9,
      "commodity": "Buckwheat",
      "picture": "../../../../assets/images/Buckwheat.jpg",
      "totalQtl": 3,
      "variety": "Buckwheat",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 10,
      "commodity": "Quinoa",
      "picture": "../../../../assets/images/Quinoa.jpg",
      "totalQtl": 2,
      "variety": "Quinoa",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    },
    {
      "id": 11,
      "commodity": "Teff",
      "picture": "../../../../assets/images/Teff.jpg",
      "totalQtl": 3,
      "variety": "Teff",
      "location": "Maharastra, India",
      "sc": "0xca48bfea13505472bacd1d6fdf237a28de939b4d"
    }

  ]

  // whrDetails(h) {

  //   this.nftService.getWhrDetails().then((data) => {
  //     this.whr = data;
  //     this.whr['picture'] = h.picture;
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

  //   this.nftService.owner().then((data) => {
  //     this.owner = data;
  //     console.log('owner', this.owner);
  //   });

  //   this.userAddress = this.nftService.userAddress();
  //   console.log(this.userAddress);

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
  //     $('#seccessmsg').modal('show');
  //     console.log('data', data);
  //     this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });
  // }

  // lenderWithdraw() {
  //   this.nftService.lenderWithdraw().then((data) => {
  //     // this.whr=data;
  //     this.paused = data;
  //     $('#seccessmsg').modal('show');
  //     console.log('data', data);
  //     this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
  //     // this.snackBar.open('You review has been sent', '', {
  //     //   duration: 2000,
  //     // });
  //   });


  // }


  // sentEth() {
  //   let sc = localStorage.getItem("sc")
  //   console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());

  //   this.nftService.transfer(sc, this.userAddress
  //     , ((this.whr.ethprice/100) * (70 / 100)).toString()).then((data) => {
  //       // this.whr=data;
  //       this.paused = data;
       
  //       console.log('data', data);
  //       this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
  //       $('#seccessmsg').modal('show');
  //       // this.snackBar.open('You review has been sent', '', {
  //       //   duration: 2000,
  //       // });
  //     }).catch(err =>{
  //       this.tx = err.message
  //       $('#seccessmsg').modal('show');
  //     }

        
  //       // alert(err.message)
  //       );
  // }


  // repaymentEth() {
  //   let sc = localStorage.getItem("sc")
  //   console.log(sc, this.userAddress, (this.whr.ethprice * (70 / 100)).toString());
  //   this.nftService.transfer(sc, this.userAddress
  //     , ((this.whr.ethprice/100) * (70 / 100)).toString()).then((data) => {
  //       // this.whr=data;
  //       this.paused = data;
  //       $('#seccessmsg').modal('show');
  //       console.log('data', data);
  //       this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
  //       // this.snackBar.open('You review has been sent', '', {
  //       //   duration: 2000,
  //       // });
  //     });
  // }

  // mint() {
  //   this.nftService.owner().then((data) => {
  //     this.nftService.mint(data).then((data) => {
  //       $('#seccessmsg').modal('show');
  //       console.log('data', data);
  //       this.tx = "Transactiondata " + data["transactionHash"] + "completed successfully.. ";
  //     });
  //   });
  // }


}
