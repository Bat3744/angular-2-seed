export class Devis {

  constructor() {  }

	private infoComplementaire:string;

	get _infoComplementaire():string {
		return this.infoComplementaire;
	}

	set _infoComplementaire(infoComplementaire:string) {
		this.infoComplementaire = infoComplementaire;
	}

/*  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public email: string,
    public telephone: string,
    public entreprise: string,
    public naturePrestation: string,
    public info: string,
  ) {  }*/

}
