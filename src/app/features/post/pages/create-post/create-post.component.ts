import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  createPostForm = new FormGroup({

    title: new FormControl<string>('',
      {
        nonNullable: true,
        validators: [Validators.required,Validators.minLength(3), Validators.maxLength(100)]}),


    description: new FormControl<string>('',
      {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(3000)]}),
  })

  get title() {
    return this.createPostForm.get('title') as FormControl;
  }

  get description() {
    return this.createPostForm.get('description') as FormControl;
  }


  onFormSubmit() {
    console.log(this.createPostForm.value);
  }
}
