import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomSelectComponent } from '../custom-select/custom-select.component';
import { cities, ECities } from '../../model/cities.model';
import { countries, ECountries } from '../../model/countries.model';
import { ELanguage, language } from '../../model/language.model';
import { Eexperience, experience } from '../../model/experience.mode';
import { department, EDepartment } from '../../model/department.model';

@Component({
    selector: 'app-user-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, CustomSelectComponent],
    templateUrl: 'user-form.component.html',
    styleUrls: ['user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup;
    submitted: boolean = false;

    // Dropdown options
    countryOptions = countries;
    cityOptions = cities;
    languageOptions = language;
    experienceOptions = experience;
    departmentOptions = department;

    constructor(private fb: FormBuilder) {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            country: ['', Validators.required],
            city: [''],
            language: [ELanguage.Js],
            experience: [''],
            department: [{ value: EDepartment.Eng, disabled: true }]
        });
    }

    ngOnInit() {
        this.userForm.get('country')?.valueChanges.subscribe(country => {
            if (country === ECountries.US) {
                this.userForm.get('city')?.enable();
            }
        });
    }

    onSubmit() {
        if (this.userForm.valid) {
            this.submitted = true;
            setTimeout(() => {
                this.submitted = false;
            }, 3000);
        } else {
            Object.keys(this.userForm.controls).forEach(key => {
                const control = this.userForm.get(key);
                control?.markAsTouched();
            });
        }
    }

    resetForm() {
        this.userForm.reset({
            name: '',
            country: '',
            city: '',
            language: ELanguage.Js,
            experience: '',
            department: EDepartment.Eng
        });
        this.submitted = false;
    }

    setDefaultValues() {
        this.userForm.patchValue({
            name: 'John Doe',
            country: ECountries.US,
            city: ECities.NYC,
            language: ELanguage.Java,
            experience: Eexperience.Intermediate
        });
    }
}