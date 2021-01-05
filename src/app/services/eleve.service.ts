import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Eleve } from '../model/eleve.model';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class ElevesService{

    private eleves: Eleve[];
    private elevesSubject: Subject<Eleve[]> = new Subject<Eleve[]>();
    private host: string = "http://localhost:8091";

    constructor(private http: HttpClient) {
        this.getEleves();
    }

    public get getelevesSubject(): Subject<Eleve[]> {
        return this.elevesSubject;
    }
    public set set(value: Subject<Eleve[]>) {
        this.elevesSubject = value;
    }

    emetEleves(): void {
        this.elevesSubject.next(this.eleves.slice());
    }

    getEleves(): void {
        this.http.get(this.host + '/eleves').subscribe(
            (data: Eleve[]) => {
                this.eleves = data;
            }, (error) => {
                console.log(error);
            }
        );
        this.emetEleves();
    }
}
