import { Component } from '@angular/core';

export interface Client {
  name: string;
  lastName: string;
  email: string;
  status: string;
}

const ELEMENT_DATA: Client[] = [
  { name: 'John', lastName: 'Doe', email: 'john@doe.com', status: 'accepted' },
  {
    name: 'Jack',
    lastName: 'Makee',
    email: 'jack@makee.com',
    status: 'accepted',
  },
  {
    name: 'Lucas',
    lastName: 'Lopez',
    email: 'lucas@lopez.com',
    status: 'declined',
  },
  {
    name: 'Mary',
    lastName: 'Johnson',
    email: 'mary@johnson.com',
    status: 'declined',
  },
  {
    name: 'June',
    lastName: 'Mayer',
    email: 'jun@mayer.com',
    status: 'declined',
  },
  {
    name: 'Charles',
    lastName: 'Power',
    email: 'charles@power.com',
    status: 'accepted',
  },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: string[] = [
    'name',
    'lastName',
    'email',
    'status',
    'actions',
  ];
  dataSource = ELEMENT_DATA;
  filters: string[] = ['accepted', 'declined'];

  constructor() {}

  changeFilter = (filter: string) => {
    if (!filter) {
      this.dataSource = ELEMENT_DATA;
      return;
    }
    this.dataSource = ELEMENT_DATA.filter((item) => item.status === filter);
  };

  getStringCammelCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  getIconStatus = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'check_circle';
      case 'declined':
        return 'cancel';
      default:
        return '';
    }
  };

  getClassStatus = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'accepted';
      case 'declined':
        return 'declined';
      default:
        return '';
    }
  };
}
