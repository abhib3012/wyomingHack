import { Component, Input, OnInit } from "@angular/core";
import { NftService } from "../nft/services/nft.service";
import { MatSnackBar } from "@angular/material";
import { Web3Service } from "../common/services/web3.service";
import { dataService } from "../services/data.service";
declare var $: any;

@Component({
  selector: "app-marketplace",
  templateUrl: "./marketplace.component.html",
  styleUrls: ["./marketplace.component.css"],
})
export class MarketplaceComponent implements OnInit {
  address: any;
  url = "https://rinkeby.etherscan.io/tx/";
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
  balance: any;
  dbal: any;
  wbal: any;
  borrowerInterest: any;
  depositIndex: any;
  inrUsdPrice: any;
  ricePrice: void;
  wheatPrice: void;
  cottonPrice: void;
  maizePrice: void;
  soyaPrice: void;
  ethUsd: any;
  inrUsd: any;
  constructor(
    private nftService: NftService,
    private dataS: dataService
  ) {
    this.borrowerInterest = 10;
    this.address = "0xF84D1884a1AD77409D0E2C4D69C6a8915Cdcdb39";
    this.getEthUsdPrice();
    this.dataS.nftData().subscribe((data) => {
      console.log(data);
      this.data = data["data"];
      this.allData = this.whrDetailsDetails(data["data"]);
      console.log("allData sc >>>>>>>>", this.allData);
    });
  }

  ngOnInit() {
    this.on();
    this.user();
    let data = { "commodity": "RICE" }
    this.getChainlinkBal(data)
    this.getChainlinkBal({ "commodity": "WHEAT" })
    this.getChainlinkBal({ "commodity": "COTTON" })
    this.getChainlinkBal({ "commodity": "MAIZE" })
    this.getChainlinkBal({ "commodity": "SOYABEAN" })
    console.log('commodity price',
      this.ricePrice,
      this.wheatPrice,
      this.cottonPrice,
      this.maizePrice,
      this.soyaPrice);
    // this.whrDetailsDetails();
    // this.getBal();

    this.getPriceInrUsd()
    this.getPriceEthUsd()
  }
  whrPrice(h) {
    console.log('whrPrice', h['quantity'], this.ricePrice, h['quantity']
      / 100 * Number(this.ricePrice));
    if (h['commodity'].toUpperCase() == 'RICE')
      return (h['quantity'] / 100) * Number(this.ricePrice)
    else if (h['commodity'].toUpperCase() == 'WHEAT')
      return (h['quantity'] / 100) * Number(this.wheatPrice)
    else if (h['commodity'].toUpperCase() == 'COTTON')
      return (h['quantity'] / 100) * Number(this.cottonPrice)
    else if (h['commodity'].toUpperCase() == 'MAIZE')
      return (h['quantity'] / 100) * Number(this.maizePrice)
    else if (h['commodity'].toUpperCase() == 'SOYABEAN')
      return (h['quantity'] / 100) * Number(this.soyaPrice)
  }

  getChainlinkBal(commodity) {
    console.log(commodity["commodity"]);
    return this.dataS.getChainlinkPrice(commodity).subscribe((data) => {
      if (data) {
        if (commodity["commodity"] == "WHEAT") {
          this.wheatPrice = data['data']['data'][0]['Agmp_Modal_Price']
          console.log('commodity >>>>> ', this.wheatPrice);
        }
        else if (commodity["commodity"] == "COTTON")
          this.cottonPrice = data['data']['data'][0]['Agmp_Modal_Price']
        else if (commodity["commodity"] == "MAIZE")
          this.maizePrice = data['data']['data'][0]['Agmp_Modal_Price']
        else if (commodity["commodity"] == "SOYABEAN")
          this.soyaPrice = data['data']['data'][0]['Agmp_Modal_Price']
        else if (commodity["commodity"] == "RICE")
          this.ricePrice = data['data']['data'][0]['Agmp_Modal_Price']
      }
    })
  }
  lend(data) {
    this.lendData = data;
    if (this.lendData) {
      $("#lend").modal("show");
    }
  }


  checkClicked(val) {
    this.test = !val;
    console.log(this.test);
    if (this.test === false) {
      this.t_borrow = true;
      this.t_lend = false;
    } else {
      this.t_lend = true;
      this.t_borrow = false;
    }
  }


  getEthUsdPrice() {
    this.dataS.ethUsdprice().subscribe((price) => {
      console.log("ethUsdprice", price);
      let priceArray = price["data"]
      // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%', priceArray);
      for (let i = 0; i < priceArray.length; i++) {
        // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%', priceArray[i]);
        if (priceArray[i]["pair"] == "ETH/USD") {
          this.inrUsdPrice = priceArray[i]["rate"]
          console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%', priceArray[i]["rate"], this.inrUsdPrice);
        }
      }
    });
  }

  usdPrice(ethPrice) {
    return this.inrUsdPrice * ethPrice
  }

  borrow() {
    this.test = false;
    this.t_borrow = true;
    this.t_lend = false;
  }
  lendddd() {
    this.test = true;
    this.t_lend = true;
    this.t_borrow = false;
  }

  slend() {
    this.test = true;
    this.t_lend = true;
    this.t_borrow = false;
  }

  on() {
    document.getElementById("overlay").style.display = "block";
  }

  off() {
    document.getElementById("overlay").style.display = "none";
  }
  user() {
    this.userAddress = localStorage.getItem("userAccount");
  }

  youGet(whrdd) {
    console.log(whrdd.loanamount);
    console.log(whrdd.interest);
    let rr = whrdd.loanAmount.replace(",", "");
    let yyy = whrdd.interest.replace(",", "");

    let y = Number(rr) + Number(yyy);
    return y;
  }

  whrDetailsDetails(d) {
    var allData = [];
    for (let i = 0; i < d.length; i++) {
      this.whrDetails2(d[i]).then((d) => {
        console.log('ddddddddd', d);
        allData.push(d);
      });
    }
    return allData;
  }

  async whrDetails2(h) {
    let whr = {};
    await this.nftService.getWhrDetails(h.sc).then((data) => {
      whr["sc"] = h.sc;
      whr["db"] = h;
      whr["data"] = data;
      whr["picture"] = h.commodity;
      whr["commodity"] = h.commodity;
    });

    await this.nftService.balanceOf(h.sc).then((data) => {
      whr["balanceOf"] = data;
    });

    await this.nftService.totalCal(h.sc).then((data) => {
      whr["totalCal"] = data / Math.pow(10, 18);
    });

    await this.nftService.totalInt(h.sc).then((data) => {
      whr["totalInt"] = data / Math.pow(10, 18);
    });

    await this.nftService.paused(h.sc).then((data) => {
      whr["paused"] = data;
    });

    await this.nftService.lenderAddress(h.sc).then((data) => {
      whr["lenderAddress"] = data;
    });

    await this.nftService.repaymentAmount(h.sc).then((data) => {
      this.repaymentAmount = data / Math.pow(10, 18);
      whr["repaymentAmount"] = data / Math.pow(10, 18);
    });

    await this.nftService.loanAmount(h.sc).then((data) => {
      this.loanAmount = data / Math.pow(10, 18);
      whr["loanAmount"] = data / Math.pow(10, 18);
    });

    await this.nftService.borrowerRepaymentStatus(h.sc).then((data) => {
      whr["borrowerRepaymentStatus"] = data;
    });

    await this.nftService.borrowerWithdrawStatus(h.sc).then((data) => {
      whr["borrowerWithdrawStatus"] = data;
    });

    await this.nftService.totalSupply(h.sc).then((totalSupply) => {
      this.totalSupply = totalSupply;
      if (this.totalSupply == 0) {
        this.mintStatus = true;
      }
    });
    return whr;
  }






  ownercheck(h) {
    this.nftService.owner(h.sc).then((data) => {
      this.owner = data;
      console.log("owner check ", data, this.userAddress);
      if (data.match(this.userAddress))
        return true;
      else
        return false;
    });
  }
  showWhrDetails(h, i) {
    console.log(h);
    localStorage.setItem("sc", h.sc);
    this.whrDetails2(h);
    this.whrdd = h;
    $("#msg").modal("show");
    this.depositIndex = i;
  }


  applyForLoan(data, i) {
    this.showWhrDetailsbr(data);
    this.borrowData = data;
    this.whrdd = data;

    this.depositIndex = i;
    if (this.borrowData) {
      $("#borrow").modal("show");
    }
    console.log(this.depositIndex);

  }

  showWhrDetailsbr(h) {
    console.log(h);
    localStorage.setItem("sc", h.sc);
    this.whrDetails2(h);
    this.whrdd = h;
  }

  repaymentEth() {
    let sc = localStorage.getItem("sc");
    console.log(
      sc,
      this.userAddress,
      (this.whr.ethprice * (70 / 100)).toString()
    );
    this.nftService
      .transfer(
        sc,
        this.userAddress,
        ((this.whr.ethprice / 100) * (70 / 100)).toString()
      )
      .then((data) => {
        console.log();
        $('#lendingSuccess').modal('show');
        console.log('data', data);
        this.tx = this.url + data["transactionHash"]
        this.linkToViewLending = this.tx;
      });
  }

  mint(h) {
    this.nftService.owner(h.db.sc).then((data) => {
      this.nftService.owner(h.db.sc).then((owner) => {
        console.log("mint ", owner, h.db.sc);
        this.nftService.mint(owner, h.db.sc).then((data) => {
          $("#lendingSuccess").modal("show");
          console.log("data", data);
          this.tx = this.url + data["transactionHash"];
          this.linkToViewLending = this.tx;
        });
      });
    });
  }

  stringToint(str) {
    let rr = str.replace(",", "");
    let n = Number(rr);
    return n;
  }

  getImageName(val) {
    let tt = val.replace("/", "").trim();
    let t = tt.replace(" ", "");
    return t;
  }

  lenderWithdraw(h) {
    this.nftService.lenderWithdraw(h.sc).then((data) => {
      this.paused = data;
      $('#lendingSuccess').modal('show');
      console.log('data', data);
      this.tx = this.url + data["transactionHash"]
      this.linkToViewLending = this.tx + data["transactionHash"];
    });
  }

  //pool apis
  sendEthFromPoolToNft(h) {
    //transfer 70% of deposit to SC 
    let value = ((h.db.ethprice) * (70 / 100)).toString();
    console.log('sendEthFromPoolToNft', h.sc, value);
    this.dataS.sendEth(h.sc, value, 0).subscribe(data => {
      console.log(data)
      this.tx = this.url + data["data"]["receipt"]["transactionHash"]
      this.linkToViewLending = this.tx;
      $('#borrow').modal('hide');
      $('#lendingSuccess').modal('show');
      console.log('data', data);
      this.allData[this.depositIndex].paused = true;
      this.allData[this.depositIndex].loanAmount = value;
    });
  }


  //Withdraw loan amt from SC (70 %)
  borrowerWithdraw(h, i) {
    console.log("borrowerWithdraw", h.sc);
    this.nftService.borrowerWithdraw(h.sc).then((data) => {
      this.paused = data;
      $("#lendingSuccess").modal("show");
      console.log("data", data);
      this.tx = this.url + data["transactionHash"];
      this.linkToViewLending = data["transactionHash"];
      this.allData[i].borrowerWithdrawStatus = true;
    });
  }


  depositToPool() {
    // this.depositValue = 0.5;
    console.log("depositToPool", this.address, this.userAddress);
    this.dataS.balance(this.address).subscribe((data) => {
      console.log(data);
      this.nftService
        .transfer(
          this.address,
          this.userAddress,
          ((this.whr.ethprice / 100) * (70 / 100)).toString()
        )
        .then((data) => {
          this.paused = data;
          $("#lendingSuccess").modal("show");
          console.log("data", data);
          this.tx = this.url + data["transactionHash"];
          this.linkToViewLending = data["transactionHash"];
        })
        .catch((err) => {
          this.tx = err.message;
          $("#seccessmsg").modal("show");
        });
    });
  }

  withdrawalFormPool() {
    // this.depositValue = 0.5;
    console.log(
      "withdrawalFormPool",
      this.userAddress,
      this.withdrawalValue,
      this.balance
    );
    if (this.withdrawalValue >= this.balance && this.withdrawalValue > 0) {
      this.dataS
        .sendEth(this.userAddress, this.withdrawalValue, 0)
        .subscribe((data) => {
          console.log(data);
          $("#lendingSuccess").modal("show");
          console.log("data", data);
          this.tx = this.url + data["transactionHash"];
          this.linkToViewLending = data["transactionHash"];
        });
    }
  }

  //transfer 70% of deposit to SC 
  borrowerRepaymentEthToNFT(h, i) {
    let ethPrice = this.whrPrice(h.db) * this.inrUsd / this.ethUsd
    let value = (Number(ethPrice * (70 / 100)) + (Number(ethPrice) *
      (this.borrowerInterest / 100))).toString();
    console.log(this.address, this.userAddress, value);
    this.nftService.transfer(h.sc, this.userAddress, value).then((data) => {
      this.allData[i].borrowerRepaymentStatus = true;
      $('#lendingSuccess').modal('show');
      console.log('data', data);
      this.tx = this.url + data["transactionHash"]
      this.linkToViewLending = data["transactionHash"];
    }).catch(err => {
      this.tx = err.message
      $('#seccessmsg').modal('show');
    }
    );
  }

  getPriceEthUsd() {
    this.dataS.getPriceEthUsd().subscribe((data) => {
      console.log('getPrice chainlink ethusd ', data);
      this.ethUsd = data['USD'] //?  data['USD'] : 26.92;
      console.log('getPrice chainlink ethusd ', this.ethUsd);
    },
      err => {
        console.log('getPrice error chainlink: ', err)
      }
    );
  }


  getPriceInrUsd() {
    this.dataS.getPriceInrUsd().subscribe((data) => {
      console.log('getPrice chainlink inrUsd ', data);
      this.inrUsd = data['USD'] //?  data['USD'] : 26.92;
    },
      err => {
        console.log('getPrice error chainlink: ', err)
      }
    );
  }
  deposit() {


  }
}
