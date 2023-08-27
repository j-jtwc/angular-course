import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnDestroy{

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    
  ) { }

  accountNumber?:string;
  accountNameControl = new FormControl('', [Validators.required]);

  accountProfile = this.formBuilder.group({
    firstname: ['', Validators.required, this.isMoreThanTen],
    lastname: ['', Validators.required],

  });

  get firstname() {
    return this.accountProfile.get('firstname');
  }

  get lastname() {
    return this.accountProfile.get('lastname');
  }

  submit2() {
    const payload = {accountNumber: this.accountNumber}
    const payload2 = this.accountProfile.value

    console.log("payload", payload)
    console.log("payload2", payload2)

    console.log(this.accountProfile.valid)
    console.log(this.accountProfile.errors)


    console.log("firstname errors", this.firstname?.errors)
    console.log(this.firstname?.hasError('required'))
    console.log(this.firstname?.hasError('isMoreThan10'))


    console.log("TEST")
    this.accountService.saveAccount(payload2).subscribe((data) => {
      console.log("data", data);
    });

  }
  

  isMoreThanTen(control: AbstractControl): Observable<ValidationErrors | null> {
    const v: number = control.value;
    if (v > 10) {
      return of(null);
    }
    return of({"iNotMoreThanten": true});
  }

  ngOnInit(): void {
    console.log('Account Component onInit')
    console.log("Account", this.accountService.getAccountName());
    this.accountService.getAccountName().subscribe((data) => {
      console.log("data", data);
    });

    this.accountNumber = "test"
    this.accountNameControl.setValue("test")
  }

  ngOnDestroy(): void {
    console.log('Account Component onDestroy')
  }

  reset() {
    this.accountNumber = "No value"
    this.accountNameControl.setValue("No value")
  }

  submit() {
    console.log("isvalid", this.accountNameControl.valid)
    console.log("error", this.accountNameControl.errors)
  }


}