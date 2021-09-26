import { Component, Input, OnInit } from "@angular/core";
import { NftService } from "../nft/services/nft.service";
import { MatSnackBar } from "@angular/material";
import { Web3Service } from "../common/services/web3.service";
import { dataService } from "../services/data.service";

declare var $: any;

@Component({
  selector: "app-lending",
  templateUrl: "./lending.component.html",
  styleUrls: ["./lending.component.css"],
})
export class LendingComponent implements OnInit {
  // url = "https://testnet.bscscan.com/tx/";
  url = "https://rinkeby.etherscan.io/tx/";

  address: String;
  lendData: any;
  data: any;
  borrowData: any;
  test: Boolean = true;
  btnaction = "Lend";
  t_lend: Boolean = true;
  t_borrow: Boolean = false;
  whr: any;
  whrdd: any;
  balanceOf: any;
  totalCal: any;
  totalInt: any;
  paused: any;
  repaymentAmount: any;
  loanAmount: any;
  feeDepositor: any;
  lenderAddress: any;
  userAddress: any;
  totalSupply: any;
  mintStatus: boolean = false;
  tx: any;
  owner: any;
  linkToViewLending: any;
  allData: any[];
  depositValue: any;
  balanceDetails: any;
  withdrawalValue: any;
  depositbtnClicked: Boolean = false;
  withdrawbtnClicked: Boolean = false;
  balance: any;
  dbal: any;
  wbal: any;
  error: boolean = false;
  errorMsg: string;
  calEthInterestOnDeposit: any;
  interest: any;
  onChainBal: any;
  constructor(
    private nftService: NftService,
    private dataS: dataService,
    private snackBar: MatSnackBar,
    private web3Service: Web3Service
  ) {
    this.address = "0xF84D1884a1AD77409D0E2C4D69C6a8915Cdcdb39";
    this.dataS.nftData().subscribe((data) => {
      console.log(data);
      this.data = data["data"];
    });
    this.user();
    this.getBal();
    // this.getChainlinkBal();
  }

  ngOnInit() {
    this.on();
  }


  
  getBal() {
    this.nftService.balance(localStorage.getItem("userAccount"))
      .then((data) => {
        this.onChainBal = data;
      }).catch(err => {
        console.log("error to get balance ", err);
      });
    this.dataS.balance(this.userAddress).subscribe((data) => {
      console.log("getBal", data);
      this.balance = data["balance"] + data["calEthInterest"];
      this.dbal = data["dbal"];
      this.wbal = data["wbal"];
      this.calEthInterestOnDeposit = data["calEthInterest"];
    });
  }
  on() {
    document.getElementById("overlay").style.display = "block";
  }

  off() {
    document.getElementById("overlay").style.display = "none";
  }
  user() {
    this.userAddress = localStorage.getItem("userAccount");
    console.log("################## NFT #####", this.userAddress);
  }

  onDepositClick() {
    $("#deposit").modal("show");
  }

  onWithDrawClick() {
    $("#withdraw").modal("show");
  }

  depositToPool() {
    this.depositbtnClicked = true;
    console.log("depositToPool", this.address, this.userAddress, this.depositValue);
    this.nftService.transfer(this.address, this.userAddress, this.depositValue.toString())
      .then((data) => {
        console.log("depositToPool", data.transactionHash);
        let obj = {
          to: data.to,
          from: data.from,
          tx: data.transactionHash,
          value: Number(this.depositValue)
        }
        console.log(' depositToPool >>>>>>', obj);

        this.tx = this.url + data["transactionHash"];
        this.linkToViewLending = this.tx;
        console.log(' linkToViewLending >>>>>>', this.linkToViewLending);
        this.depositbtnClicked = false;
        $('#deposit').modal('hide');
        $('#deposit-success').modal('show');
        console.log('data', this.linkToViewLending);
        this.dataS.sendEthSave(obj).subscribe((datasave) => {
          console.log('sendEthSave', datasave);
          this.getBal();
        })
      }).catch(err => {
        this.tx = err.message
        $('#seccessmsg').modal('show');
        this.depositbtnClicked = false;
      });
  }

  withdrawalFormPool() {
    this.withdrawbtnClicked = true;
    console.log(
      "withdrawalFormPool",
      this.userAddress,
      this.withdrawalValue,
      this.balance
    );
    // let interest = Number(this.withdrawalValue * (10 / 100))
    // console.log('interest >>>  ', interest);
    if (this.withdrawalValue <= this.balance && this.withdrawalValue > 0) {
      this.error = false;
      this.dataS.sendEth(this.userAddress, this.withdrawalValue, 0).subscribe((data) => {
        if (data) {
          this.withdrawbtnClicked = false;
          console.log(data, data["data"]["receipt"])
          this.tx = this.url + data["data"]["receipt"]["transactionHash"]
          this.linkToViewLending = this.tx;
          $('#withdraw').modal('hide');
          $('#withdraw-success').modal('show');
          console.log('data', this.linkToViewLending);
          this.getBal();
        }
      })
      this.error = false;
    } else {
      this.withdrawbtnClicked = false;
      this.error = true;
      this.errorMsg = "Insufficient Funds";
    }
  }
}
