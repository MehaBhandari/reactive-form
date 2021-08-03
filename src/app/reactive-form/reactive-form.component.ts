import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['../app.component.scss']
})

export class ReactiveFormComponent implements OnInit {
    public formHeading = 'This is the Reactive Form: ';
    EmployeeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.EmployeeForm = this.fb.group({
            firstName: [],
            lastName: [],
            emailId: []
        });
    }

    public onButtonSubmit() {
        alert('Submitted');
    }
}