import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Web3Service } from '../../common/services/web3.service';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(private web3Service: Web3Service) {
  }


  getWhrDetails(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.whr().call();
  }

  balanceOf(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.balanceOf(this.web3Service.getAccount()).call();
  }

  baseURL(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.baseURL().call();
  }

  feeDepositor(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.feeDepositor().call();
  }



  lenderAddress(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.lenderAddress().call();
  }

  loanAmount(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.loanAmount().call();
  }

  loanAmtToPay(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.loanAmtToPay().call();
  }

  name(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.name().call();
  }


  owner(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.owner().call();
  }

  paused(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.paused().call();
  }


  repaymentAmount(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.repaymentAmount().call();
  }

  totalInt(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.totalInt().call();
  }

  totalCal(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.totalCal().call();
  }

  borrowerWithdraw(sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.borrowerWithdraw().send({ from: this.web3Service.getAccount() });
  }

  lenderWithdraw(sc): Promise<any> {
    //console.log('getAccount', this.web3Service.getAccount());
    return this.web3Service.artifactsToContract(sc).methods.lenderWithdraw().send({ from: this.web3Service.getAccount() });
  }

  userAddress(sc): String {
    //console.log('getAccount', this.web3Service.getAccount());
    return this.web3Service.getAccount();
  }


  transfer(to, from, value): Promise<any> {
    return this.web3Service.trasfer(to, from, value);
  }

  balance(address): Promise<any> {
    return this.web3Service.getBalance(address);
  }

  mint(address, sc): Promise<any> {
    return this.web3Service.artifactsToContract(sc).methods.mint(address).send({ from: this.web3Service.getAccount() });
  }

  totalSupply(sc): Promise<any> {
    this.web3Service.sc = sc;
    return this.web3Service.artifactsToContract(sc).methods.totalSupply().call();
  }

  borrowerRepaymentStatus(sc): Promise<any> {
    this.web3Service.sc = sc;
    return this.web3Service.artifactsToContract(sc).methods.borrowerRepaymentStatus().call();
  }
  // lenderRepaymentStatus(sc): Promise<any> {
  //   this.web3Service.sc = sc;
  //   return this.web3Service.artifactsToContract(sc).methods.lenderRepaymentStatus().call();
  // }

  borrowerWithdrawStatus(sc): Promise<any> {
    this.web3Service.sc = sc;
    return this.web3Service.artifactsToContract(sc).methods.borrowerWithdrawStatus().call();
  }

  borrowerRepaymentStatusUpdate(sc): Promise<any> {
    this.web3Service.sc = sc;
    return this.web3Service.artifactsToContract(sc).methods.borrowerRepaymentStatusUpdate().send({ from: this.web3Service.getAccount() });
  }

}
