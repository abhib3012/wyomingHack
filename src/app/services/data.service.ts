import { Injectable } from '@angular/core';
// import { retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class dataService {
    baseURL = '';
    wallet = '';
    chainlink: string;
    ethUsdUrl = ''
    usdtUsdUrl: string;
    xauUsdUrl: string;
    xaGUsdUrl: string;
    inrUsdUrl: string;
    constructor(private http: HttpClient) {
        this.baseURL = 'https://uat-backend.whrrl.in/';
        this.wallet = "https://uat-warehouses.whrrl.in/api/mswc/";
        this.chainlink = 'https://bk.bru.finance/';
        // this.baseURL = 'http://localhost:4002/';
        // this.wallet = "http://localhost:4002/api/mswc/";
        this.ethUsdUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
        this.xauUsdUrl = "https://min-api.cryptocompare.com/data/price?fsym=XAU&tsyms=USD"
        this.xaGUsdUrl = "https://min-api.cryptocompare.com/data/price?fsym=XAG&tsyms=USD"
        this.usdtUsdUrl = "https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD"
        this.inrUsdUrl = "https://min-api.cryptocompare.com/data/price?fsym=INR&tsyms=USD"
    }
    nftData() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseURL + 'nft/nftData', { headers: headers });
    }
    sendEth(to, value, int) {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.wallet + `eth-send/${to}/${value}/${int}`, { headers: headers });
    }
    balance(to) {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.wallet + `eth-balance/${to}/`, { headers: headers });
    }
    sendEthSave(data) {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.wallet + 'eth-send-save', data, { headers: headers });
    }
    ethUsdprice() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.wallet + 'band-price', { headers: headers });
    }
    getXagPrice() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.wallet + 'xag-price', { headers: headers });
    }

    getChainlinkPrice(data) {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.chainlink, data, { headers: headers });
    }

    getPriceEthUsd() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.ethUsdUrl, { headers: headers });
    }
    getPriceXagUsd() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.xaGUsdUrl, { headers: headers });
    }
    getPriceXauUsd() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.xauUsdUrl, { headers: headers });
    }

    getPriceUsdtUsd() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.usdtUsdUrl, { headers: headers });
    }

    getPriceInrUsd() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.inrUsdUrl, { headers: headers });
    }
}
