import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { TribunalModel } from '../../models/tribunal.model';
import { TribunalComponent } from '../tribunal/tribunal.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tribunais',
    standalone: true,
    templateUrl: './tribunais.component.html',
    styleUrl: './tribunais.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, PaginatorModule, DropdownModule, TribunalComponent, RouterLink],
})
export class TribunaisComponent {
    @Input({ required: true }) tribunais!: TribunalModel[];

    first: number = 0;
    rows: number = 9;

    onPageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }

}
