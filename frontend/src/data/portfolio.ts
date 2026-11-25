import profilePhoto from '@/assets/profile-img.jpg';
import showxImg from '@/assets/showx-screenshot.png';
import taskflowImg from '@/assets/taskflow-screenshot.png';

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  cardTechStack: string[];
  modalTechStack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  caseStudyNote: string;
}

export interface ExperienceItem {
  role: string;
  companyLine: string;
  responsibilities: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  scoreAndYear: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
}

export const PROFILE_DATA = {
  name: 'Jiya Sukhija',
  heroHeading: "Hi, I'm Jiya",
  roles: [
    'Full-Stack Developer',
    'Software Developer',
    'React & JavaScript Developer',
  ],
  heroSummary:
    'MCA student building responsive, database-driven applications with the MERN stack.',
  email: 'sukhijajiya1703@gmail.com',
  github: 'https://github.com/JIYA-SUKHIJA',
  linkedin: 'https://www.linkedin.com/in/jiya-sukhija-170603j/',
  resumePath: '/files/Jiya_Sukhija_Resume.pdf',
  profileImage: profilePhoto,
};

export const HERO_TECH_STRIP = [
  { code: 'Re', name: 'React' },
  { code: 'JS', name: 'JavaScript' },
  { code: 'TS', name: 'TypeScript' },
  { code: 'No', name: 'Node.js' },
  { code: 'Ex', name: 'Express' },
  { code: 'Mo', name: 'MongoDB' },
  { code: 'My', name: 'MySQL' },
  { code: 'Gi', name: 'Git' },
];

export const ABOUT_DATA = {
  paragraphs: [
    'Jiya is an MCA student and Full-Stack Developer focused on MERN stack development and responsive, database-driven applications. Her technical focus includes React.js, JavaScript, TypeScript, Node.js, Express.js, REST APIs, MongoDB, MySQL, JWT authentication, Google OAuth, role-based access control and payment workflows.',
    'She has academic knowledge of Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems and Computer Networks.',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming languages',
    items: ['C', 'C++', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'React Native', 'Next.js', 'Tailwind CSS', 'Redux', 'Redux Toolkit', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.io', 'JWT Authentication', 'bcrypt', 'Google OAuth', 'Mongoose'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MongoDB Atlas', 'MySQL'],
  },
  {
    title: 'Developer tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    title: 'Deployment',
    items: ['Vercel', 'Render'],
  },
  {
    title: 'Core computer science',
    items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'showx',
    slug: 'showx',
    title: 'ShowX CinemaHub — Full-Stack Movie Ticket Booking Platform',
    shortDescription:
      'A full-stack MERN movie ticket booking platform covering movies, theatres, shows, bookings, payments and user management.',
    fullDescription:
      'A full-stack MERN movie ticket booking platform covering movies, theatres, shows, bookings, payments and user management.',
    cardTechStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose'],
    modalTechStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose'],
    highlights: [
      '20+ screens/modules and 60+ reusable React components',
      '25+ REST APIs',
      'Seat locking and booking conflict prevention',
      'Razorpay payments with HMAC-SHA256 verification',
      'Role-Based Access Control and admin dashboard',
      'PDF ticket generation',
      'Deployed on Vercel and Render',
    ],
    liveUrl: 'https://showx-the-cinema-hub.vercel.app/',
    githubUrl: 'https://github.com/JIYA-SUKHIJA/showx-the-cinema-hub',
    image: showxImg,
    caseStudyNote: 'Full case-study pages (/projects/showx, /projects/taskflow) belong in the next build.',
  },
  {
    id: 'taskflow',
    slug: 'taskflow',
    title: 'To-Do Dashboard — Task Management Application',
    shortDescription: 'A task management application for organising everyday work.',
    fullDescription: 'A task management application for organising everyday work.',
    cardTechStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5'],
    modalTechStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5'],
    highlights: [
      'Create, update and delete tasks',
      'Filter tasks',
      'State management',
      'LocalStorage persistence',
    ],
    liveUrl: 'https://taskflow-dashboard-ecru.vercel.app/',
    githubUrl: 'https://github.com/JIYA-SUKHIJA/taskflow_dashboard',
    image: taskflowImg,
    caseStudyNote: 'Full case-study pages (/projects/showx, /projects/taskflow) belong in the next build.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Full-Stack Trainee Intern',
    companyLine: 'Codways Technologies LLP, Noida, India • June 1 – July 15, 2026 (45 days)',
    responsibilities: [
      'Worked with 15+ technologies and tools.',
      'Built responsive interfaces and single-page applications with HTML5, CSS3, Bootstrap, JavaScript and React.',
      'Developed backend REST APIs with Node.js and Express.',
      'Worked with MongoDB and MySQL.',
      'Used Postman and Git/GitHub.',
      'Worked with deployment platforms including Netlify, Heroku and Render.',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Geeta University',
    degree: 'Master of Computer Applications (MCA)',
    scoreAndYear: 'CGPA 8.9 • 2025–2027 (Expected)',
    location: 'Panipat, Haryana',
  },
  {
    institution: 'DAV PG College',
    degree: 'Bachelor of Computer Applications (BCA)',
    scoreAndYear: 'CGPA 7.9 • 2022–2025',
    location: 'Karnal, Haryana',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Smart India Hackathon (SIH) 2025',
    issuer: 'MoE Innovation Cell • Team ZeroIndex',
    date: 'Sep 2025',
  },
  {
    title: 'NexHack — National Level Hackathon',
    issuer: 'Geeta Technical Hub & SCSE',
    date: 'Nov 2025',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud & Simplilearn',
    date: 'May 2026',
    credentialId: '10196734',
  },
  {
    title: 'Basics of Data Structures & Algorithms',
    issuer: 'Simplilearn',
    date: 'Dec 2025',
    credentialId: '9554963',
  },
  {
    title: 'Java Programming',
    issuer: 'ScholarHat',
    date: 'Dec 2025',
    credentialId: 'FDRY121225',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 2025',
  },
];