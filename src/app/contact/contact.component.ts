import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_vvoq4l8', 'template_s8elh1b', e.target as HTMLFormElement, {
        publicKey: 'CMBHTXESjKjbeelL6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}