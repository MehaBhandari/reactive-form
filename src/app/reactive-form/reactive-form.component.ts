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
    employeeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.minLength(1)]],
            emailId: ['', Validators.required]
        });
    }

    public onButtonSubmit() {
        if(this.employeeForm.valid) {
            alert('Submitted');
        }        
        console.log(this.employeeForm.value);
    }
}