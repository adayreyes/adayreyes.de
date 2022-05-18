import { HttpClient } from '@angular/common/http';
import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  
  contact = {
    name: '', //Bind  to InputField name="name"
    email: '', //Bind to InputField name="email"
    message: '', //Bind to InputField name="message"
  };

  
  
  /**
   * A post request construct configuration
   */
  post = {
    // Where to send the post request Ex. http://my-domain/sendMail.php
      //or https://my-domain/sendMail.php if you have SSL-Certificate Active
      endPoint: 'https://www.aday-reyes.developerakademie.net/portfolio/send_mail.php',
      // What to send, notice JSON.stringify
      body: (payload: any) => JSON.stringify(payload),
      // How to send, notice Content-Type and responseType
      options: {
        headers: {
          'Content-Type': 'text/plain',
          responseType: 'text',
        },
      },
    };
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
    }

    clearForm(){
      this.contact.name = "";
      this.contact.email = "";
      this.contact.message = "";
    }

    onSubmit(ngForm) {
      if (ngForm.submitted && ngForm.form.valid) {
        this.http
          .post(this.post.endPoint, this.post.body(this.contact))
          .subscribe({
            next: (response) => {
              console.log(response);
              // Here Message was send
            },
            error: (error) => {
              console.error(error);
              // Here Message was not send!!!!!
            },
            complete: () => 
            this.clearForm(),
          });
      }
    }
  }
