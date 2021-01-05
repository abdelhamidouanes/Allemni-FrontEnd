export class Eleve{
    public get id_groupe(): bigint {
        return this._id_groupe;
    }
    public set id_groupe(value: bigint) {
        this._id_groupe = value;
    }

    public get date_naissence(): Date {
        return this._date_naissence;
    }
    public set date_naissence(value: Date) {
        this._date_naissence = value;
    }
    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    constructor(private _nom: string, private _prenom: string,
                private _date_naissence: Date, private _id_groupe: bigint
    ){}
}
