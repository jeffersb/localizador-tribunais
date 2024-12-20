import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../layout/container/container.component';
import { TribunalModel } from '../../models/tribunal.model';
import { TribunaisService } from '../../services/tribunais.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-tribunal-detalhe',
    standalone: true,
    templateUrl: './tribunal-detalhe.component.html',
    styleUrl: './tribunal-detalhe.component.css',
    imports: [
        CommonModule,
        ContainerComponent,
        ToastModule,
        ReactiveFormsModule
    ],
    providers: [MessageService]
})
export class TribunalDetalheComponent implements OnInit, OnDestroy {


    codigo!:string;
    tribunal! : any;
    contatoForm: FormGroup;

    constructor(private activatedRoute: ActivatedRoute, 
        private primeNgConfig: PrimeNGConfig,
        private tribunaisService: TribunaisService,
        private messageService: MessageService,
        private fb: FormBuilder){
        this.activatedRoute.params.subscribe(params=>{
           this.codigo = params?.['codigo'];
        }); 
       
        this.contatoForm = this.fb.group({
            nome: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            msg: ['', [Validators.required]]
          });
     }
     
    
    ngOnInit(): void {
        this.tribunaisService.getTribunais().subscribe(data=>{
            this.tribunal = data.find(el=>el.codigo===this.codigo)
        })
        this.primeNgConfig.ripple = true;
    }

    onSubmit() {
        if (this.contatoForm.valid) {
            console.log("ok");
            this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Mensagem enviada com sucesso!' })
        }
      }

      toggleValidation() {
        const control = this.contatoForm.get('nome');
        if (control!.validator === Validators.required) {
          control!.clearValidators();
        } else {
          control!.setValidators(Validators.required);
        }
        control!.updateValueAndValidity();
      }


    ngOnDestroy(): void {
       
    }
}
