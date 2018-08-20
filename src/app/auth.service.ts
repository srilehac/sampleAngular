import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule){ }

  getUserDetails(username, password){
    //return this.http.post('/api/auth.php,' {


      //username,
      //password

    //}).subscribe(data => {
         //console.log(data, " is what we get from the server")
    //})


  }

 
}
