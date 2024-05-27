import { Injectable } from '@angular/core';

export interface Technologies {
  title?: string;
  description?: string;
}

export interface TabContent {
  id: number;
  title?: string;
  company?: string;
  time?: string;
  description?: string;
  technologies?: Array<Technologies>;
}

export interface WhoIsJotace {
  name?: string;
  birth?: string;
  city?: string;
  job?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TabsContentService {
  stringTechnologies: string = 'Technologies';
  stringMainEducation: string = 'Main Education';
  stringCourses: string = 'Courses';
  stringMainExperience: string = 'Experience';
  otherExperience: string = 'Other Experience';
  stringLanguage: string = 'Languages';
  whoIsJotace: string = 'Who is Jotace?';

  whoIsContent: WhoIsJotace = {
    name: 'Jose Carlos Gomez Rueda',
    birth: '15/05/1994',
    city: 'Malaga, Spain',
    job: 'Frontend developer specialized in Angular',
    description: 'test'
  };

  experience: Array<TabContent> = [
    {
      id: 5,
      title: 'Front-End Developer | Angular',
      company: 'IBM + Metrica Consulting',
      time: 'oct. 2023 - currently',
      description:
        'Development of Santander Bank new website for business, specifically for the Confirming and Remittances section for Invoice Cancellation, Agile Payment, and Inquiry Operations.',
      technologies: [
        {
          title: 'Languages',
          description: 'HTML, CSS, JavaScript, TypeScript',
        },
        {
          title: 'FrontEnd Frameworks & Libraries',
          description: 'Angular15+, Bootstrap, Angular Material',
        },
        {
          title: 'Testing',
          description: 'Jasmine, Karma, Sonar, Jenkins',
        },
        {
          title: 'Digital Tools',
          description: 'Visual Studio Code, GitHub, Chrome Developer Tools',
        },
      ],
    },
    {
      id: 4,
      title: 'Front-End Developer | Angular',
      company: 'Ezentis Technologies SL',
      time: 'feb. 2023 - oct. 2023 | 9 months',
      description:
        'Developing Angular projects for private and public clients, such as the Spanish Ministry of Labor.',
      technologies: [
        {
          title: 'Languages',
          description: 'HTML, CSS, JavaScript, TypeScript',
        },
        {
          title: 'FrontEnd Frameworks & Libraries',
          description: 'Angular15+, Bootstrap',
        },
        {
          title: 'Testing',
          description: 'Jasmine, Karma, Sonar, Jenkins',
        },
        {
          title: 'Digital Tools',
          description:
            'Visual Studio Code, GitHub, SourceTree, Chrome Developer Tools',
        },
      ],
    },
    {
      id: 3,
      title: 'Front-End Developer | Web & Angular',
      company: 'Marbill Europe Technologies SL',
      time: 'feb. 2022 - feb. 2023 | 1 year',
      description: 'Developing websites, themes, landings, and campaigns.',
      technologies: [
        {
          title: 'Languages',
          description: 'HTML, CSS, JavaScript, TypeScript',
        },
        {
          title: 'FrontEnd Frameworks & Libraries',
          description: 'Angular13+, Bootstrap, Twig',
        },
        {
          title: 'Digital Tools',
          description: 'Dashboard and own console, GitHub',
        },
      ],
    },
    {
      id: 2,
      title: 'Full Stack Web Developer',
      company: 'Belong Software SL',
      time: 'jan. 2022 - feb. 2022 | 2 months',
      description:
        'A virtual office developed as a Single-Page Application (SPA) with business logic focused on telecommuting.',
      technologies: [
        {
          title: 'Languages',
          description: 'HTML, CSS, JavaScript & TypeScript',
        },
        {
          title: 'FrontEnd Frameworks & Libraries',
          description: 'Angular 14, Bootstrap',
        },
        {
          title: 'BackEnd',
          description: 'REST API with Node & Express | Full CRUD',
        },
        {
          title: 'External Libraries',
          description: 'Nodemailer, bcryptjs, jsonwebtoken, dayjs',
        },
        {
          title: 'DataBase',
          description: 'MySQL',
        },
        {
          title: 'Digital Tools',
          description: 'VisualStudio, MySQLWorkBench, GitHub',
        },
      ],
    },
    {
      id: 1,
      title: 'Digital Marketing & CRM Specialist',
      company: 'Conecta Pymes SL',
      time: 'nov. 2017 - feb. 2021) | 3.5 years',
      description:
        "Mixed role: Community Manager, Content Manager, Graphic Designer, and Copywriter. Also being responsible for the company's CRM: Beyond Up. Profiles configuration, task flows, mailing campaigns, process automation, and portfolio management.",
    },
  ];

  education: Array<TabContent> = [
    {
      id: 3,
      title: 'Full Stack Web Developer + .NET specialization bootcamp',
      company: 'CodeHouse Academy',
      time: '2021 - 2022 | 700 hours',
      description:
        'Intensive bootcamp of 6 months/700 hours in which I trained to become a developer with the following technologies.',
      technologies: [
        {
          title: 'Module 1',
          description:
            'HTML, CSS, Bootstrap, SASS, UX/UI, Webs Responsive, GIT/Github',
        },
        {
          title: 'Module 2',
          description: 'Javascript ES6 Advance',
        },
        {
          title: 'Module 3',
          description: 'Typescript, Angular13, MySQL',
        },
        {
          title: 'Module 4',
          description: 'Node, NodeJS + Express',
        },
        {
          title: 'Module 5',
          description: 'POO, Objets C#, SOLID, C# advanced, API Rest',
        },
        {
          title: 'Module 6',
          description: 'Final project',
        },
        {
          title: 'Masterclasses',
          description:
            'Cloud Computing Azure, Design Thinking, Power BI, Low Code, Unity',
        },
      ],
    },
    {
      id: 2,
      title: 'Master Degree: Digital Marketing & ECommerce',
      company: 'EAE Business School / Barcelona University',
      time: '2019',
      description:
        'Advanced knowledge in online marketing strategies, data analytics, digital advertising, and effective online sales techniques. This program has equipped me to excel in navigating the dynamic landscape of digital business.',
    },
    {
      id: 1,
      title: 'Communication & Journalism Degree',
      company: 'University of Malaga',
      time: '2012 - 2016',
    },
  ];

  courses: Array<TabContent> = [
    {
      id: 4,
      title: 'Advance Angular 13+ for Web Development',
      company: 'Udemy | Mario Girón',
      time: '2021',
    },
    {
      id: 3,
      title:
        'Flutter Development with Dart: Officially created in collaboration with the Google Flutter team',
      company: 'Udemy | Dr. Angela Yu',
      time: '2022',
    },
    {
      id: 2,
      title: 'Flutter 3: Complete Development Guide for IOS and Android',
      company: 'Udemy | Fernando Herrera',
      time: '2022',
    },
    {
      id: 1,
      title: 'Advance Flutter 3: Take your knowledge to the next level',
      company: 'Udemy | Fernando Herrera',
      time: '2022',
    },
  ];

  languages: Array<TabContent> = [
    {
      id: 1,
      title: 'Spanish',
      company: 'Spain',
      time: ' Native',
      description:
        "I'm from Malaga, Spain. I've always lived here, although I've been on exchange in many countries, strengthening other languages.",
    },
    {
      id: 2,
      title: 'English',
      company: 'Trinity College London',
      time: ' B2+',
      description:
        "I've been speaking English from a young age. Watching series and movies in English since childhood helped me develop a keen ear for the language. Besides that, I've been studying English for many years. I also have experience working in English; at Marbill, I worked exclusively in English because it was a Danish company.",
    },
    {
      id: 3,
      title: 'Italian',
      company: 'La Sapienza, Rome University',
      time: ' B2',
      description:
        "I've always loved Italian and its entire culture. I learned by taking private lessons and spent a year living in Rome on an Erasmus exchange.",
    },
  ];

  constructor() {}
}
