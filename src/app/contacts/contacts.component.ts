import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contacts',
  styleUrls: ['./contacts.component.css'],
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {

  public myForm: FormGroup;
  public myModel = '';
  public mask = [/\d/, '(', /\d/, /\d/, /\d/, ')',
    ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor() {
    this.myForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userMessage: new FormControl('', Validators.required),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z_0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
      ]),
      userPhone: new FormControl(
        // '',Validators.required
      )
    });
  }

  public submit(): void {
    console.log(this.myForm);
  }
}
