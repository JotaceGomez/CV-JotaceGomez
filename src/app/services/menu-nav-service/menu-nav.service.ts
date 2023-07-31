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
    { id: 1, title: '¿Quién es Jotacé?', navLink: '/who-is-jotace' },
    { id: 2, title: 'Experiencia', navLink: '/experience' },
    { id: 3, title: 'Estudios', navLink: '/education' },
    { id: 4, title: 'Idiomas', navLink: '/languages' },
    { id: 5, title: 'Tecnologías', navLink: '/technologies' }
  ];


  constructor() { }
}
