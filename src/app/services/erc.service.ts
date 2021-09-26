import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Web3Service } from '../common/services/web3.service';

@Injectable({
  providedIn: 'root'
})
export class ErcService {

  baseURL = '';
  wallet = '';
  constructor(private http: HttpClient, private web3Service: Web3Service) {
    this.baseURL = 'https://uat-backend.whrrl.in/';
    // this.wallet = "http://localhost:4002/api/mswc/";
    this.wallet = "https://uat-warehouses.whrrl.in/api/mswc/";
  }
  mint(amount, sc): Promise<any>  {
    return this.web3Service.artifactsToContractWrt(sc).methods.mint(amount).call();
  }
  burn(amount, sc) : Promise<any> {
    return this.web3Service.artifactsToContractWrt(sc).methods.burn(amount).call();
  }
  trasfer(address, amount, sc) : Promise<any> {
    return this.web3Service.artifactsToContractWrt(sc).methods.trasfer(address, amount).call();
  }
  totalSupply(sc): Promise<any>  {
    return this.web3Service.artifactsToContractWrt(sc).methods.totalSupply().call();
  }

  balanceOf(address, sc): Promise<any>  {
    return this.web3Service.artifactsToContractWrt(sc).methods.balanceOf(address).call();
  }
  name(sc): Promise<any> {
    return this.web3Service.artifactsToContractWrt(sc).methods.name().call();
  }
  symbol(sc): Promise<any> {
    return this.web3Service.artifactsToContractWrt(sc).methods.symbol().call();
  }


}
