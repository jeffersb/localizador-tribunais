import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TribunalModel } from '../../models/tribunal.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tribunal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tribunal.component.html',
    styleUrl: './tribunal.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TribunalComponent {
    @Input({ required: true }) tribunal!: TribunalModel;
    
}
