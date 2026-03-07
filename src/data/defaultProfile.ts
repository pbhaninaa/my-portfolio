/**
 * Default portfolio profile – Philasande Bhani.
 * Replace or extend this object to use the template for another user.
 */
import type { PortfolioProfile } from './types'

import highSchoolImg from '../assets/highSchool.png'
import hotelManagementImg from '../assets/hotel-management.png'
import covid19Img from '../assets/covid-19.png'
import calculatorImg from '../assets/calculator.png'
import weatherImg from '../assets/wWeather.png'
import jobHunterImg from '../assets/job-hunter.png'
import posImg from '../assets/point-of-sales.png'
import mechConnectClientDash from '../assets/mech-connect-client-dash.png'
import stockPilotImage from '../assets/stock-manager.png'
import loanSharkImage from '../assets/loan_shark.png'

export const defaultProfile: PortfolioProfile = {
  personal: {
    fullName: 'Philasande Bhani',
    tagline: 'Software Developer | Java / Full Stack Developer',
    dob: new Date(1998, 6, 1), 
    careerStartYear: 2021,
    location: 'Gauteng, South Africa',
    phone: '078 214 1216',
    email: 'pbhanina@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/mr-p-bhani/',
    linkedinDisplay: 'linkedin.com/in/mr-p-bhani',
  },
  salary: {
    baseMonthly: 25_000,
    incrementPerYear: 2_500,
  },
  heroIntro:
    'With a **National Diploma in Information Technology** and experience as a Java Developer, I bring a strong foundation in software development and problem-solving. My expertise spans **Java**, **Spring Boot**, **Angular**, **React**, **Vue**, and **Android**, enabling me to develop and maintain high-quality software solutions.',
  about: {
    leadParagraph:
      'I am **{fullName}**, a young graduate of {age} years. I hold a National Diploma in Information Technology and am determined to become one of the best in the field.',
    paragraphs: [
      'Over the past {yearsOfExperience} years, I worked as a Developer at a software development firm, where I gained valuable insights into how successful companies operate. During this time, I honed my skills in developing and maintaining software programs, as well as making improvements to enhance functionality.',
      'I possess strong problem-solving skills and the ability to efficiently work with both technical and abstract concepts. My communication skills are excellent, allowing me to interact effectively with clients to provide outstanding customer service. After discussions with clients, I can identify ways to improve performance, speed, and usability and relay these insights to programmers for implementation.',
      'I have a keen ability to troubleshoot technical issues, identify their root causes, and implement solutions. I can explain complex technical concepts to both professionals and non-technical users. Attention to detail is one of my strengths, and I can remain focused on tasks for long periods to get the job done. I actively stay updated on the latest industry changes to continue growing professionally.',
    ],
    techStack: [
      { label: 'Frontend', items: ['JavaScript', 'Angular 4+ with TypeScript', 'React', 'React Native', 'HTML5', 'CSS3', 'Vue.js'] },
      { label: 'Backend', items: ['Java', 'Spring', 'Hibernate', 'Spring Boot', 'Node.js', 'Python 3'] },
      { label: 'Databases', items: ['MySQL', 'MongoDB'] },
      { label: 'Other', items: ['Software Development Methodologies', 'Software Development Tools', 'Containerization', 'DevOps foundations'] },
    ],
    preferences: {
      remote: 'I can work anywhere if it is fully remote.',
      hybrid: 'In every South African province.',
      local: 'In every South African province.',
      workAuthAfrica: '100% authorised',
      workAuthGlobal: 'Remote',
    },
    idealJob: {
      title: 'Software Developer',
      description:
        'I would like to assist the development team with all aspects of software design and coding. I would like my primary role to be learning the codebase, attending design meetings, writing basic code, fixing bugs, and assisting the Development Manager in all design-related tasks. I am most proficient in using **Java** and **Spring Boot**, and I would like to work with **Microsoft Azure** to manage my projects. I am looking for a company that will aid in my development and support my career growth.',
      noticePeriod: 'Notice period: 1 week.',
    },
  },
  experience: [
    {
      role: 'Full Stack Developer (Java, C#, Vue, Android)',
      company: 'Dashpay',
      period: '2023 July - Current Employer',
      bullets: [
        'Developing and maintaining full-stack applications using Java (Spring Boot), C# (ASP.NET Core 8 Web API), and Vue.js (Vue 2).',
        'Designing and implementing scalable RESTful APIs with secure authentication (JWT).',
        'Building backend services using clean architecture principles, MediatR, and Ardalis.Result patterns.',
        'Developing Android applications using Java and integrating them with backend services.',
        'Working with SQL databases (SQL Server, MySQL) and optimizing complex queries and stored procedures.',
        'Implementing unit testing and mocking frameworks to ensure high code quality and reliability.',
        'Translating business requirements into technical solutions aligned with company goals.',
        'Maintaining and enhancing POS and merchant-based platforms across web and mobile.',
        'Participating in code reviews, debugging production issues, and improving system performance.',
      ],
    },
    {
      role: 'Java Full-Stack Developer',
      company: 'Reverside',
      period: '2022 June - 2023 July',
      bullets: [
        'Designing and implementing Java-based applications.',
        'Analyzing user requirements to inform application design.',
        'Defining application objectives and functionality.',
        'Aligning application design with business goals.',
        'Developing and testing software.',
        'Supporting clients with existing systems.',
      ],
    },
    {
      role: 'Java Full-Stack Developer Trainee',
      company: 'Geeks4Learning',
      period: '2021 December - 2022 June',
      description:
        'Completed a 12-month rigorous blended-learning program at Geeks4Learning, covering industry-relevant theoretical and practical training, using internationally renowned proficiency assessment tools. Covered: Soft Skills / Workplace Skills (verbal and non-verbal communication, work ethics, HR processes, teamwork); MICT Seta accredited training material (NQF 5 Systems Development); Geeks4Learning industry-relevant courses aligned with Microsoft (Advanced Programming Concepts, Front-End Development, etc.); Project-Simulation based on a problem statement, applying theoretical understanding practically to simulate a real-life project using relevant tools and technologies.',
    },
    {
      role: 'React Front-End Developer Trainee',
      company: 'MLab (CodeTribe)',
      period: '2020 December - 2021 November',
      description:
        'Completed a 12-month training program at MLab (CodeTribe), covering industry-relevant theoretical and practical training, using internationally renowned proficiency assessment tools. Covered: Develop project concepts and maintain optimal workflow; complete detailed programming and development tasks for public and internal websites; carry out quality assurance tests to discover errors and optimize usability.',
    },
  ],
  education: [
    { name: 'System development NQF5', institution: 'Learnership', year: 'January 2022 – December 2022' },
    { name: 'National Diploma in Information Technology', institution: 'Walter Sisulu University', year: 'February 2017 – November 2020' },
    { name: 'Matric / Grade 12', institution: 'Ntabezulu Senior Secondary School', year: 'January 2013 – November 2015' },
  ],
  awards: ['Gold Performance Award for Computer Application Technology at High School','Under The Rock Star Award – Received at closing function, 2025'],
  skillGroups: [
    { category: 'Tools and Technologies', items: ['Git', 'GitHub', 'BitBucket', 'Jira', 'Slack', 'Azure', 'Docker'] },
    { category: 'Software Development', items: ['Java', 'Spring Boot', 'VB.Net', 'Angular', 'AngularJS', 'React', 'ReactJS', 'Vue 3', 'Vue.js', 'React Native', 'Android', 'JavaScript', 'HTML5', 'CSS', 'JWT', 'Stripe'] },
    { category: 'Databases', items: ['MySQL', 'Microsoft Access', 'SQLite'] },
  ],
  skillsInProjects: [
    'Java', 'Spring Boot', 'Angular', 'AngularJS', 'React', 'ReactJS', 'Vue 3', 'Vue.js', 'React Native', 'Android',
    'MySQL', 'VB.Net', 'Microsoft Access', 'SQLite', 'JavaScript', 'HTML5', 'CSS', 'Git', 'GitHub', 'JWT', 'Stripe',
    'GitLab', 'Atlassian', 'BitBucket', 'Jira',
  ],
  projects : [
  {
    name: 'MechConnect',
    category: 'Web App',
    image: mechConnectClientDash,
    tech: 'Vue 3, Spring Boot, React Native, MySQL, JWT, Stripe',
    description:
      'Full-stack service marketplace connecting customers with mechanics and car wash providers. Includes real-time service requests, role-based dashboards (client, mechanic, car wash, admin), Stripe payments with platform fees, and notifications.',
    tags: ['Vue 3', 'Spring Boot', 'React Native', 'MySQL', 'JWT', 'Stripe', 'SSE'],
    link: 'https://mechanic-management-806bi8xrb-pbhanina-5058s-projects.vercel.app/',
  },
  {
  name: 'Loan Shark',
  category: 'Web App',
  image: loanSharkImage,  // add your image import
  tech: 'Vue 3, Vuetify 3, Spring Boot, MySQL, Flyway, JWT, Pinia',
  description:
    'Loan management system for micro-lenders: client onboarding with KYC (SA ID, selfie, location), configurable interest and grace period, repayment tracking, business capital pool, installment schedules with pay-by-installment, owner/cashier roles, audit logging, and client self-service portal.',
  tags: ['Vue 3', 'Vuetify', 'Spring Boot', 'MySQL', 'KYC', 'Loans', 'Repayments', 'Role-Based Access'],
  link: 'https://github.com/pbhaninaa/loan-shark',  // set to your repo
},
  {
  name: 'StockPilot',
  category: 'Mobile App',
  image: stockPilotImage,
  tech: 'Java, Android SDK, SQLite, SharedPreferences, Gradle',
  description:
    'Offline-first stock and sales management app for taverns and small shops. Includes secure local login, role-based access control for Owner, Manager, and Cashier, inventory tracking, daily sales recording, low-stock monitoring, and owner-managed staff accounts.',
  tags: ['Android', 'Java', 'SQLite', 'Role-Based Access', 'Inventory', 'Sales Tracking', 'Offline First'],
  link: 'https://github.com/pbhaninaa/stock-management',
},

  {
    name: 'High School Application System',
    category: 'Web App',
    image: highSchoolImg,
    tech: 'AngularJS, Spring Boot, Java',
    description:
      'Online school admission system that allows learners to search schools, register, and apply. Administrators can log in to review and manage student applications.',
    tags: ['AngularJS', 'Spring Boot', 'Java'],
    link: '#',
  },
  {
    name: 'Hotel Management System',
    category: 'Web App',
    image: hotelManagementImg,
    tech: 'Spring Boot, Angular, MySQL',
    description:
      'Hotel reservation system where users can select hotels, check room availability, and book rooms. Supports secure login and booking cancellation up to 24 hours before check-in.',
    tags: ['Spring Boot', 'Angular', 'MySQL'],
    link: '#',
  },
  {
    name: 'Covid-19 App',
    category: 'Mobile App',
    image: covid19Img,
    tech: 'ReactJS',
    description:
      'Web application displaying Covid-19 statistics for South Africa and global data, including healthcare contact options and detailed pandemic information.',
    tags: ['ReactJS'],
    link: '#',
  },
  {
    name: 'Weather App',
    category: 'Mobile App',
    image: weatherImg,
    tech: 'React Native',
    description:
      'Mobile weather application that detects the user’s location and displays current weather conditions along with multi-day forecasts.',
    tags: ['React Native'],
    link: '#',
  },
  {
    name: 'Job Finder',
    category: 'Mobile App',
    image: jobHunterImg,
    tech: 'React Native, JSearch API',
    description:
      'Mobile app for discovering Software Developer jobs. Users can search for positions, view job details, and apply through the application.',
    tags: ['React Native', 'JSearch API'],
    link: '#',
  },
  {
    name: 'Point of Sale (POS)',
    category: 'Mobile App',
    image: posImg,
    tech: 'Android (Java), SQLite',
    description:
      'Android POS application that allows merchants to sell digital products such as airtime and data, manage transactions, and view sales history.',
    tags: ['Android', 'Java', 'SQLite'],
    link: '#',
  },
  {
    name: 'Simple Calculator',
    category: 'Desktop App',
    image: calculatorImg,
    tech: 'VB.NET, Microsoft Access',
    description:
      'Desktop calculator application that performs arithmetic operations, percentage calculations, and average computations with basic data storage.',
    tags: ['VB.NET', 'Microsoft Access'],
    link: '#',
  },
],
  contact: {
    email: 'pbhanina@gmail.com',
    phone: '078 214 1216',
    linkedinUrl: 'https://www.linkedin.com/in/mr-p-bhani/',
    linkedinDisplay: 'linkedin.com/in/mr-p-bhani',
  },
  references: [
    { name: 'Lebogang Tlatsi', email: 'lebogangt@cappayments.co.za', phone: '082 317 9184' },
    { name: 'Odireleng Ramela', email: 'Odireleng.ramela@geeks4learning.com', phone: '011 998 1960' },
    { name: 'Kabelo Gaotlhaelwe', email: 'kabelo@mlab.co.za', phone: '079 339 5980' },
  ],
}
