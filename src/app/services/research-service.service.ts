import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ResearchServiceService {
  // @TODO Add an update SMP component

  constructor(
    private http: HttpClient
  ) { 
  }

  getList(){
    // return this.http.get(title: String, author: String, img-src: String, members: [])[]('../research/research.json')
  }
}
