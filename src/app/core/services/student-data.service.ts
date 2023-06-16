import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  constructor() {}

  students = [
    {
      name: 'Alex',
      gender: 'male',
      courseModule: 3,
      courseTopic: 'Pipes',
      isPayed: true,
    },
    {
      name: 'Betty',
      gender: 'female',
      courseModule: 2,
      courseTopic: 'Directives',
      isPayed: false,
    },
    {
      name: 'Chris',
      gender: 'male',
      courseModule: 1,
      courseTopic: 'Routing',
      isPayed: true,
    },
    {
      name: 'Diana',
      gender: 'female',
      courseModule: 4,
      courseTopic: 'Pipes',
      isPayed: false,
    },
    {
      name: 'Eric',
      gender: 'male',
      courseModule: 3,
      courseTopic: 'Directives',
      isPayed: true,
    },
    {
      name: 'Frank',
      gender: 'male',
      courseModule: 2,
      courseTopic: 'Routing',
      isPayed: false,
    },
    {
      name: 'George',
      gender: 'male',
      courseModule: 1,
      courseTopic: 'Pipes',
      isPayed: true,
    },
    {
      name: 'Hannah',
      gender: 'female',
      courseModule: 4,
      courseTopic: 'Directives',
      isPayed: false,
    },
    {
      name: 'Ian',
      gender: 'male',
      courseModule: 3,
      courseTopic: 'Routing',
      isPayed: true,
    },
    {
      name: 'Jack',
      gender: 'male',
      courseModule: 2,
      courseTopic: 'Pipes',
      isPayed: false,
    },
    {
      name: 'Jill',
      gender: 'female',
      courseModule: 1,
      courseTopic: 'Directives',
      isPayed: true,
    },
    {
      name: 'John',
      gender: 'male',
      courseModule: 4,
      courseTopic: 'Routing',
      isPayed: false,
    },
    {
      name: 'Katie',
      gender: 'female',
      courseModule: 3,
      courseTopic: 'Pipes',
      isPayed: true,
    },
  ];

}
