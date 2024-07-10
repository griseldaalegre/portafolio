import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [CardComponent]
})
export class ProjectsComponent {
    items: { id: number, name: string, edad: number, description: string }[] = [
        { id: 1, name: '1', edad: 3, description: 'Facultad' },
        { id: 2, name: '2', edad: 2, description: 'curso' },
        { id: 3, name: '3', edad: 1, description: 'Curso' },
        { id: 4, name: '4', edad: 4, description: 'ewewe' },
        { id: 4, name: '4', edad: 4, description: 'ewewe' },
        { id: 4, name: '4', edad: 4, description: 'ewewe' }
    ];
      
}
