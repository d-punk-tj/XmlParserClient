import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { xmlItem } from 'src/app/models/xmlItem'


@Injectable({
  providedIn: 'root'
})
export class XmlService {

  base_url = 'http://localhost:4200/xml/xml-parser/?url=' 

  constructor(private http:HttpClient) { }

  parseXml(url : string){
    return this.http.get(`${this.base_url + url}`);
  }
}
