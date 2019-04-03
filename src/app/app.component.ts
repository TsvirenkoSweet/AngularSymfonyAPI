import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    input.ng-touched{
      border: 2px solid red;
    }
    input.ng-valid{
      border: 2px solid green;
    }
  `]
})
export class AppComponent {

  @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ua';

  formDataa = {};
  isSumbmited = false;

  clickRandEmail() {
    const randMail = 'dsffdfs@mail.ru';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randMail
    //   },
    //   country: '',
    //   answer: ''
    // });
    this.form.form.patchValue({
      user: {
          pass: '',
          email: randMail
        }
    });
  }

  submitForm() {
    this.isSumbmited = true;
    this.formDataa = this.form.value;
    this.form.reset();
    console.log(this.form);
  }
}

