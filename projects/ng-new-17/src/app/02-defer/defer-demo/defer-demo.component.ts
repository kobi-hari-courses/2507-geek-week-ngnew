import { Component } from '@angular/core';
import { LoremComponent } from "../lorem/lorem.component";
import { DefferedComponent } from "../deffered/deffered.component";

@Component({
    selector: 'app-defer-demo',
    standalone: true,
    templateUrl: './defer-demo.component.html',
    styleUrl: './defer-demo.component.scss',
    imports: [LoremComponent, DefferedComponent]
})
export default class DeferDemoComponent {

}


