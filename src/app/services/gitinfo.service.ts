import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GitinfoService {

  constructor(private http: HttpClient) { }

  getGitUser(){
    return this.http.get('https://api.github.com/users/7prachikhetwal/repos'); 
}

// getGitFollow(){
//   return this.http.get('https://api.github.com/users/7prachikhetwal/repos'); 
// }
}
