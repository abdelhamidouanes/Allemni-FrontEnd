import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Eleve } from '../model/eleve.model';
import { ElevesService } from '../services/eleve.service';

@Component({
  selector: 'app-registre-appel',
  templateUrl: './registre-appel.component.html',
  styleUrls: ['./registre-appel.component.scss']
})
export class RegistreAppelComponent implements OnInit {

  private elevesSubscription: Subscription;
  eleves: Eleve[];
  constructor(private elevesservice: ElevesService) { }

  ngOnInit(): void {
    this.elevesSubscription = this.elevesservice.getelevesSubject.subscribe(
      (data: Eleve[]) => { this.eleves = data; },
      (error) => { console.log(error); }
    );
  }


}
