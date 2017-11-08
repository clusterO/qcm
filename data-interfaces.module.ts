export class Element {
    id_formulaire: number;
    titre_formulaire: string;
    description_formulaire: string;
    date_creation: string;
    reponses_anonymes_acceptees: boolean;
    image: string;
    id_liste: number;
    token: string;

    constructor() {}
  }

export interface Response {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    id_questionnaire: number;
    id_agent_sin3: number;
    profil_sin3: string;
  }

  export class Question {
    id: number;
    formulaire_id: number;
    type: string;
    titre: string;
    description: string;
    obligatoir: boolean;
    ordre: number;
    values: {};
    state= 'inactive';
  }




