import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Shift } from '../Shift';
import { ShiftService } from '../ShiftService';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {

  shifts : Shift[] = [];
  currentShift:Shift;
  shiftActive=false;
  lunchActive=false;
  breakActive=false;
  requestFailed=false;
  errorMessage='';
  profileImage='';
  constructor(private shiftService : ShiftService, private httpClient: HttpClient) { }

  ngOnInit(): void {


    this.shiftService.getProfileImage().subscribe({
    next: (response: any) => {
      this.profileImage = response;
    },
    error: (err: any) => {console.log(err);}
    });


    this.shiftService.getShifts().subscribe(
      (response:Shift[])=>{this.shifts = response;

      },
      (err:HttpErrorResponse)=>{ alert(err.error.message);}
      );


      setTimeout(() => {

      this.shiftService.getCurrentShift().subscribe(
        (response:Shift)=>{this.currentShift = response;
        if(this.currentShift.shiftActive){this.shiftActive=true;}
        if(this.currentShift.breakActive){this.breakActive=true;}
        if(this.currentShift.lunchActive){this.lunchActive=true;}
        },
        (err:HttpErrorResponse)=>{
          console.log(err.error.message);}
      );

        },10);
 
  }

  startShift() : void
  {
  
   this.shiftService.startShift().subscribe(
    (response:Shift)=>{console.log(response); this.shiftActive = true;
      window.location.reload(); },
      (error:HttpErrorResponse) => {
        console.log(error.status);
        this.errorMessage =  error.error;
      this.requestFailed = true;}
    
   ) ;
  }

  endShift() : void
  {
   
   this.shiftService.endShift().subscribe(
    (response:Shift)=>{console.log(response); this.shiftActive = false;
      window.location.reload(); },
    (error:HttpErrorResponse)=>{console.log(error.status);
      this.errorMessage =  error.error;
      this.requestFailed = true;}
   ) ;
  }

  startLunch() : void
  {

   this.shiftService.startLunch().subscribe(
    (response:Shift)=>{console.log(response); this.lunchActive = true;
      window.location.reload();  },
    (error:HttpErrorResponse)=>{console.log(error.name);
      this.errorMessage =  error.error;
      this.requestFailed = true;}
   ) ;
  }

  endLunch() : void
  {

   this.shiftService.endLunch().subscribe(
    (response:Shift)=>{console.log(response); this.lunchActive = false;
      window.location.reload(); },
    (error:HttpErrorResponse)=>{console.log(error.message);
      this.errorMessage =  error.error;
      this.requestFailed = true;}
   ) ;
  }

  startBreak() : void
  {
   this.shiftService.startBreak().subscribe(
    (response:Shift)=>{console.log(response); this.breakActive = true;
      window.location.reload(); },
    (error:HttpErrorResponse)=>{console.log(error.message)
      this.errorMessage =  error.error;
      this.requestFailed = true;}
   ) ;
  }

  endBreak() : void
  {

   this.shiftService.endBreak().subscribe(
    (response:Shift)=>{console.log(response); this.breakActive = false;   window.location.reload(); },
    (error:HttpErrorResponse)=>{console.log(error.message)
      this.errorMessage =  error.error;
      this.requestFailed = true;}
   ) ;
  }
}
