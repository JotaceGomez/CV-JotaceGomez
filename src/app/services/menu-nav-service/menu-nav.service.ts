import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number,
  title: string,
  navLink: string
}

@Injectable({
  providedIn: 'root'
})

export class MenuNavService {

  menuItems: MenuItem[] = [
    { id: 1, title: 'Who is Jotace?', navLink: '/who-is-jotace' },
    { id: 2, title: 'Experience', navLink: '/experience' },
    { id: 3, title: 'Education', navLink: '/education' },
    { id: 4, title: 'Languages', navLink: '/languages' },
    { id: 5, title: 'Technologies', navLink: '/technologies' }
  ];


  constructor() { }
}
