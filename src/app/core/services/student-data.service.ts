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
      module: '3',
      chapter: 'Pipes',
      isPayed: true,
    },
    {
      name: 'Betty',
      gender: 'female',
      module: '2',
      chapter: 'Directives',
      isPayed: false,
    },
    {
      name: 'Chris',
      gender: 'male',
      module: '2',
      chapter: 'Routing',
      isPayed: true,
    },
    {
      name: 'Diana',
      gender: 'female',
      module: '2',
      chapter: 'Pipes',
      isPayed: false,
    },
    {
      name: 'Eric',
      gender: 'male',
      module: '3',
      chapter: 'Directives',
      isPayed: true,
    },
    {
      name: 'Frank',
      gender: 'male',
      module: '2',
      chapter: 'Routing',
      isPayed: false,
    },
    {
      name: 'George',
      gender: 'male',
      module: '1',
      chapter: 'Pipes',
      isPayed: true,
    },
    {
      name: 'Hannah',
      gender: 'female',
      module: '4',
      chapter: 'Directives',
      isPayed: false,
    },
    {
      name: 'Ian',
      gender: 'male',
      module: '3',
      chapter: 'Routing',
      isPayed: true,
    },
    {
      name: 'Jack',
      gender: 'male',
      module: '2',
      chapter: 'Pipes',
      isPayed: false,
    },
    {
      name: 'Jill',
      gender: 'female',
      module: '1',
      chapter: 'Directives',
      isPayed: true,
    },
    {
      name: 'John',
      gender: 'male',
      module: '4',
      chapter: 'Routing',
      isPayed: false,
    },
    {
      name: 'Katie',
      gender: 'female',
      module: '3',
      chapter: 'Pipes',
      isPayed: true,
    },
  ];
}
