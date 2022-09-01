import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Shift } from "./Shift";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  
  export class ShiftService {
  
    private apiServerUrl='http://localhost:8080/api/user';
  
    constructor(private http: HttpClient) { }

    public getShifts() : Observable <Shift[]> {
        return this.http.get<any>(`${this.apiServerUrl}/shifts`)
    }
    public getCurrentShift() : Observable <Shift> {
      return this.http.get<any>(`${this.apiServerUrl}/currentShift`)
  }
    public startShift() : Observable <any>
    {
      return this.http.post<any>(`${this.apiServerUrl}/startShift`,null)
    }

    public endShift() : Observable <any>
    {
      return this.http.post<any>(`${this.apiServerUrl}/endShift`,null)
    }

    public startBreak() : Observable <any>
    {
      return this.http.post<any>(`${this.apiServerUrl}/startBreak`,null)
    }

    public endBreak() : Observable <any>
    {
      return this.http.post<any>(`${this.apiServerUrl}/endBreak`,null)
    }

    public startLunch() : Observable <any>
    {
      return this.http.post<any>(`${this.apiServerUrl}/startLunch`,null)
    }

    public endLunch() : Observable <any>
    {
      return this.http.post<any>(`${this.apiServerUrl}/endLunch`,null)
    }

    public getProfileImage() : Observable <any>
    {
      return this.http.get(`${this.apiServerUrl}/profileImage`,{responseType: 'text'});
    }

  }