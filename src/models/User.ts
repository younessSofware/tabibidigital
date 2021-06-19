import { Malade } from './Malade';
import { Patient } from './Patient';
import { Consultation } from './Consultation';
export class User {
    _id: string;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    photos:File[] = [];
    faceIds = [];
    specialisation: string;
    nom_Clinique: string;
    adresseClinique: string;
    consultations: Consultation[];
    patients: Patient[];
    malades: Malade[];
    // constructor(nom, prenom, email, password, specialisation,nomClinique ,adresseClinique){
    //     this.nom = nom;
    //     this.prenom = prenom;
    //     this.email = email;
    //     this.password = password;
    //     this.specialisation = specialisation;
    //     this.nom_Clinique = nomClinique;
    //     this.adresseClinique = adresseClinique;
    // }
}