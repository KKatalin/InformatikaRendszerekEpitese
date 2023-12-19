import { Component } from '@angular/core';

import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { LibraryStockService } from '../services/libraryStock.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup = this.formBuilder.group({
    id: [],
    firstName: [''],
    lastName: [''],
    idCardNumber: [ 0, Validators.max(99999999)],
    adress: [''],
    phone: [''],
  });

  successMessage: string = '';
  errorMessage: string = '';
idCardNumber: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  async createUser() {
    const user = this.userForm.value;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const userAdded = await this.userService.createUser(user);
      this.successMessage = 'Borrower added with id ' + userAdded.id;
    } catch (err:any) {
      this.errorMessage = 'Failed to add the Borrower.';
    }
  }
  
}
