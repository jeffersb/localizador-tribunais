import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TipoTribunalModel } from '../models/tipo-tribunal.model';

@Injectable({
    providedIn: 'root',
})
export class TipoTribunalService {
    
  tiposTribunal = ['Conselho', 'Eleitoral', 'Estadual', 'Federal', 'Militar',  'Superior', 'Trabalho'];

    constructor() {}

    public getTiposTribunais(): Observable<TipoTribunalModel[]> {
        return of(
            this.tiposTribunal.map((tipoTribunal, index) => ({
                id: index + 1,
                tipo: tipoTribunal,
            }))
        );
    }
}