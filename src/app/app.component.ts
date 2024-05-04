import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;
  data$!: Observable<any>;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.data$ = this.http.get('https://api.example.com/data');
  }

  submitForm() {
    if (this.myForm.valid) {
      // Form is valid, perform form submission logic
      console.log('Form submitted:', this.myForm.value);
    } else {
      // Form is invalid, display error messages
      console.log('Form is invalid');
    }
  }
}
