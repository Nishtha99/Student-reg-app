import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JsondatapackService {

  private jsonData = [];
   private api = "https://jsonplaceholder.typicode.com/posts";
   constructor(private http: HttpClient) { }
   getJsonData() {
      return this.http.get(this.api);
   }

}
