import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    firstName:null,
    lastName:null,
    password: null,
    email:null,
    role:null
  };

  isRegister = false;
  isRegisterFailed = false;
  errorMessage = '';

  selectedFiles?: FileList;
  currentFile?: File;



  selectedFile : any;
  imagePreviewSrc: string | ArrayBuffer | null | undefined = '';
  isImageSelected: boolean = false;

  constructor(private authService: AuthService, private router:Router, private appComp:AppComponent) { }
 

  ngOnInit(): void {
      
  }

  onSubmit(): void {
    const { username, password, email, firstName, lastName, role } = this.form;

    console.log(firstName + " " + lastName + " " + username + " " + email+ " " +password + " " + role );
    const info = {firstName,lastName,username,email,password,role};
    const formData : FormData = new FormData();
    const file: File = this.selectedFile;
  
    formData.append("info",JSON.stringify(info));
    formData.append("file",file);

    this.authService.register(formData).subscribe({
      next: (event: any) => {console.log(event);},
      error: (err: any) => {console.log(err);}
  });

  /* this.authService.register(username,email,password,firstName,lastName,role).subscribe({


      error: err => {
        console.log( "response from error: " + err.message);
        this.errorMessage = err.message;
        this.isRegisterFailed = true;
      }


    });*/

  }

  reloadPage(): void {
    window.location.reload(); 
  }



  showPreview(event: any) {

    this.selectedFile = (event.target as HTMLInputElement).files?.item(0)

    if (this.selectedFile) {
      if (["image/jpg","image/jpeg", "image/png"].includes(this.selectedFile.type)) {
        console.log('selected file.name: '+ this.selectedFile.name);
       
        let fileReader = new FileReader();
        fileReader.readAsDataURL(this.selectedFile);
       

        fileReader.addEventListener('load', (event) => {
          this.imagePreviewSrc = event.target?.result;
          this.isImageSelected = true
        })
      }
    } else {
      this.isImageSelected = false
    }
    
  }


}
