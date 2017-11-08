import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Element } from '../data-interfaces.module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  title = 'Create form';
  form = new Element();

  constructor(public dialogRef: MatDialogRef<FormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.title = data.title;
                this.form.id_formulaire = data.form.id_formulaire;
                this.form.titre_formulaire = data.form.titre_formulaire;
                this.form.description_formulaire = data.form.description_formulaire;
                this.form.date_creation = data.form.date_creation;
                this.form.image = data.form.image;
                this.form.reponses_anonymes_acceptees = data.form.reponses_anonymes_acceptees;
                this.form.token = data.form.token;
                this.form.id_liste = data.form.id_liste;
              }
  ngOnInit() {}

  save(): void {
    this.dialogRef.close(this.form);
  }

}




