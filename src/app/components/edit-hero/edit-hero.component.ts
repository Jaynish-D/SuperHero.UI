import { Component, Input } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
@Input() hero? : SuperHero;
  constructor(){}
  ngOnInit() : void {

  }
}
