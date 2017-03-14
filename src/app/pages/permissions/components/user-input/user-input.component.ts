import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {NgUploaderOptions} from "ngx-uploader/ngx-uploader";

@Component({
  selector: 'user-input-component',
  templateUrl: 'user-input.html',
})

export class UserInput implements OnInit{

  public defaultPicture = 'assets/img/theme/no-photo.png';
  myForm: FormGroup;
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  ngOnInit(){
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      avatar: new FormControl()
    });
  }

  constructor() {
  }

  onSubmit(){
    //const user = new User(
    //    this.myForm.value.email,
    //    this.myForm.value.password,
    //    this.myForm.value.firstName,
    //    this.myForm.value.lastName
    //);
    //
    //this.authService.signup(user)
    //    .subscribe(
    //        data => console.log(data),
    //        error => console.error(error)
    //    );

    //this.myForm.reset();

    alert("Submit");
  }
}
