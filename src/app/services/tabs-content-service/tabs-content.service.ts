import { Injectable } from '@angular/core';

export interface Technologies {
  title?: string
  description?: string
}

export interface TabContent {
  id: number;
  title?: string
  company?: string
  time?: string
  description?: string
  technologies?: Array<Technologies>
}

@Injectable({
  providedIn: 'root'
})
export class TabsContentService {

  experience: Array<TabContent> = [
    {
      id: 4,
      title: 'Front-End Developer | Angular',
      company: 'Ezentis Technologies',
      time: 'feb. 2023 - currently',
      description: 'Developing Angular projects for private and public clients, such as the Spanish Ministry of Labor.',
      technologies: [
        {
          title: 'Languages',
          description: 'HTML, CSS, JavaScript, TypeScript'
        },
        {
          title: 'FrontEnd Frameworks & Libraries',
          description: 'Angular13+, Bootstrap'
        },
        {
          title: 'Digital Tools',
          description: 'Visual Studio Code, GitHub, SourceTree, Chrome Developer Tools'
        }
      ]
    },
    {
      id: 3,
      title: 'Front-End Developer | Web & Angular',
      company: 'Marbill Europe Technologies',
      time: 'feb. 2022 - feb. 2023 | 1 year',
      description: 'Developing websites, themes, landings, and campaigns.',
      technologies: [
        {
          title: 'Languages',
          description: 'HTML, CSS, JavaScript, TypeScript'
        },
        {
          title: 'FrontEnd Frameworks & Libraries',
          description: 'Angular, Bootstrap, Twig'
        },
        {
          title: 'Digital Tools',
          description: 'Dashboard and own console, GitHub'
        }
      ]
    },
    {
      id: 2,
      title: 'Full Stack Web Developer',
      company: 'Belong Software',
      time: 'jan. 2022 - feb. 2022 | 2 months',
      description: 'A virtual office developed as a Single-Page Application (SPA) with business logic focused on telecommuting.',
      technologies: [
        {
          title: 'Languages',
          description: 'HTML, CSS, JavaScript & TypeScript'
        },
        {
          title: 'FrontEnd Frameworks & Libraries',
          description: 'Angular 14, Bootstrap'
        },
        {
          title: 'BackEnd',
          description: 'REST API with Node & Express | Full CRUD'
        },
        {
          title: 'External Libraries',
          description: 'Nodemailer, bcryptjs, jsonwebtoken, dayjs'
        },
        {
          title: 'DataBase',
          description: 'MySQL'
        },
        {
          title: 'Digital Tools',
          description: 'VisualStudio, MySQLWorkBench, GitHub'
        }
      ]
    },
    {
      id: 1,
      title: 'Digital Marketing & CRM Specialist',
      company: 'Conecta Pymes SL',
      time: 'nov. 2017 - feb. 2021) | 3.5 years',
      description: 'Mixed role: Community Manager, Content Manager, Graphic Designer, and Copywriter. Also being responsible for the company\'s CRM: Beyond Up. Profiles configuration, task flows, mailing campaigns, process automation, and portfolio management.',
    }
  ];

  constructor() { }
}