import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RPCService} from './rpc.service';

@Injectable({
  providedIn: 'root'
})
export class PureRpcResolverService implements Resolve<any> {

  constructor(private rpcService: RPCService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.rpcService.rpc(route.data['abiMethodName'], route.params[route.data['abiMethodParameter']]);
  }
}
