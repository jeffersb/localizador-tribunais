import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../layout/container/container.component';
import { TribunalModel } from '../../models/tribunal.model';
import { TribunaisService } from '../../services/tribunais.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-tribunal-detalhe',
    standalone: true,
    templateUrl: './tribunal-detalhe.component.html',
    styleUrl: './tribunal-detalhe.component.css',
    imports: [
        CommonModule,
        ContainerComponent
    ],
})
export class TribunalDetalheComponent implements OnInit, OnDestroy {

    tribunaisService = inject(TribunaisService);

    codigo!:string;
    tribunal! : any;

    constructor(private activatedRoute: ActivatedRoute){
        this.activatedRoute.params.subscribe(params=>{
           this.codigo = params?.['codigo'];
        }); 
     }
     
    
    
    ngOnInit(): void {
        this.tribunaisService.getTribunais().subscribe(data=>{
            this.tribunal = data.find(el=>el.codigo===this.codigo)
        })
    }

    ngOnDestroy(): void {
       
    }
}
