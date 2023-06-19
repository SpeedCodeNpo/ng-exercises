import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoginfoService {

  constructor() { }

  dogList = [
    {
      ownerName: "John",
      dogName: "Spot",
      breed: "Golden Retriever",
      age: "3 years old"
    },
    {
      ownerName: "Jane",
      dogName: "Fido",
      breed: "Labrador Retriever",
      age: "2 years old"
    },
    {
      ownerName: "Bill",
      dogName: "Max",
      breed: "German Shepherd",
      age: "1 year old"
    },
    {
      ownerName: "Susan",
      dogName: "Buddy",
      breed: "Poodle",
      age: "6 months old"
    },
    {
      ownerName: "Michael",
      dogName: "Sammy",
      breed: "Beagle",
      age: "4 months old"
    }
  ];


}
