import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoginfoService {

  constructor() { }

  dogList = [
    {
      ownerName: "John Doe",
      dogName: "Spot",
      breed: "Golden Retriever",
      age: "3 years old"
    },
    {
      ownerName: "Jane Doe",
      dogName: "Fido",
      breed: "Labrador Retriever",
      age: "2 years old"
    },
    {
      ownerName: "Bill Smith",
      dogName: "Max",
      breed: "German Shepherd",
      age: "1 year old"
    },
    {
      ownerName: "Susan Jones",
      dogName: "Buddy",
      breed: "Poodle",
      age: "6 months old"
    },
    {
      ownerName: "Michael Brown",
      dogName: "Sammy",
      breed: "Beagle",
      age: "4 months old"
    }
  ];


}
