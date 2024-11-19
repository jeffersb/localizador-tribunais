import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, first, Observable } from 'rxjs';
import { TribunalModel } from '../models/tribunal.model';

@Injectable({
    providedIn: 'root',
})
export class TribunaisService {
    
  url = 'assets/tribunais.json';
   
  constructor(private httpClient : HttpClient){
  }

  public getTribunais(): Observable<TribunalModel[]> {
       return this.httpClient.get<TribunalModel[]>(this.url);
  }

   
}
