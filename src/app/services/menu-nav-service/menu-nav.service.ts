import { Injectable } from '@angular/core';

export interface MenuItem {
  title: string,
  navLink: string
}

@Injectable({
  providedIn: 'root'
})

export class MenuNavService {

  menuItems: MenuItem[] = [
    { title: '¿Quién es Jotacé?', navLink: '/who-is-jotace' },
    { title: 'Experiencia', navLink: '/experience' },
    { title: 'Estudios', navLink: '/education' },
    { title: 'Idiomas', navLink: '/languages' },
    { title: 'Tecnologías', navLink: '/technologies' }
  ];


  constructor() { }
}
