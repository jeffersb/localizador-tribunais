import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../layout/container/container.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {
    Observable,
    Subject,
    combineLatest,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    startWith,
    takeUntil,
} from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipoTribunalModel } from '../../models/tipo-tribunal.model';
import { TipoTribunalService } from '../../services/tipo-tribunal.service';
import { TribunaisService } from '../../services/tribunais.service';
import { TribunalModel } from '../../models/tribunal.model';
import { TribunaisComponent } from '../../ui/tribunais/tribunais.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        CommonModule,
        ContainerComponent,
        CheckboxModule,
        InputTextModule,
        IconFieldModule,
        InputIconModule,
        DividerModule,
        ToggleButtonModule,
        FormsModule,
        ReactiveFormsModule,
        TribunaisComponent,
    ],
})
export class HomeComponent implements OnInit, OnDestroy {
    tipoTribunaisService = inject(TipoTribunalService);

    tribunaisService = inject(TribunaisService);
    fb = inject(FormBuilder);

    subject$ = new Subject<void>();

    tiposTribunais$!: Observable<TipoTribunalModel[]>;
    tribunais$!: Observable<TribunalModel[]>;
    tribunaisFilter$!: Observable<TribunalModel[]>;

    form!: FormGroup;

    ngOnInit(): void {
        this.tiposTribunais$ = this.tipoTribunaisService.getTiposTribunais();
        this.tribunais$ = this.tribunaisService.getTribunais();

        this.form = this.fb.group({
            search: '',
            tiposTribunais: this.fb.array([])
        });

        this.tiposTribunais$.pipe(takeUntil(this.subject$)).subscribe((items) => {
            const itemsControls = items.map(() => new FormControl(0));
            this.form.setControl('tiposTribunais', this.fb.array(itemsControls));
        });


        const search$ = this.form.get('search')!.valueChanges.pipe(
            startWith(''),
            filter((value) => value.length >= 2 || value.length === 0),
            debounceTime(666),
            distinctUntilChanged()
        );

        const others$ = this.form.valueChanges.pipe(
            startWith({
                tiposTribunais: []
            }),
            map((value) => {
                const { search, ...rest } = value;
                return rest;
            })
        );

        this.tribunaisFilter$ = combineLatest([
            search$,
            others$,
            this.tribunais$,
        ]).pipe(
            map(([search, others, tribunais]) => {
                
                const selectedtiposTribunais = others.tiposTribunais
                .flat()
                .filter((c: number) => c > 0);

                console.log(selectedtiposTribunais)

                return tribunais.filter(

                    (tribunal) =>
                      (selectedtiposTribunais.length === 0 ||
                        tribunal.tipoTribunal.some((tipoTribunal) =>
                            selectedtiposTribunais.includes(tipoTribunal)
                            )) &&
                        (tribunal.nome!
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                            tribunal.sigla!
                                .toLowerCase()
                                .includes(search.toLowerCase()))
                );
            })
        );
    }

    ngOnDestroy(): void {
        this.subject$.next();
        this.subject$.complete();
    }
}
