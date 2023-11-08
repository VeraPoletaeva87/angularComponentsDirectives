import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateValidator } from '../../services/validators';

@Component({
  selector: 'create-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CreateCardComponent {
  constructor(private router: Router) {}

  cardForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    image: new FormControl('', [Validators.required]),
    video: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required, dateValidator()])
  });

  cardSaveHandler() {
    this.router.navigate(['/main']);
   }

  resetHandler() {
    this.cardForm.reset();
  }

  addTagHandler() {
    // this.router.navigate(['/main']);
   }

  updateTitle(e: Event) {
    this.cardForm.patchValue({title: (e.target as HTMLInputElement).value});
  }

  updateDescription(e: Event) {
    this.cardForm.patchValue({description: (e.target as HTMLInputElement).value});
  }

  updateImage(e: Event) {
    this.cardForm.patchValue({image: (e.target as HTMLInputElement).value});
  }

  updateVideo(e: Event) {
    this.cardForm.patchValue({video: (e.target as HTMLInputElement).value});
  }

}