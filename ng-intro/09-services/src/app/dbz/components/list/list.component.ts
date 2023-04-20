import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html'
})

export class ListComponent {
    @Input()
    public characterList: Character[] = [
        {
            name: 'Trunk',
            power: 10
        }
    ]


}