import { IProject } from '@/types';

/**
 * ================================================================
 *  👋 EDIT-ME FIRST: your identity
 *  Everything below drives the Hero, About, Navbar, Footer & SEO.
 * ================================================================
 */
export const GENERAL_INFO = {
    name: 'Sushant Giri',
    firstName: 'Shushant', // used in short greetings, e.g. "Hi, I'm {firstName}"
    title: 'Software Developer & UI/UX Designer',
    // Each pair becomes one line of the rotating hero headline —
    // keep each word short so it never wraps at large font sizes.
    roleLines: [
        ['SOFTWARE', 'DEVELOPER'],
        ['UI/UX', 'DESIGNER'],
    ],

    tagline:
        'Software developer and UI/UX designer with hands-on experience in front-end development, cloud infrastructure, and user-centered design.',

    aboutHeadline:
        'I believe in translating ideas into functional, well-designed digital products — where clean front-end code meets thoughtful, user-centered design.',
    aboutBio: `I'm a software developer and UI/UX designer based in Kathmandu, Nepal, currently pursuing a BSc (Hons) in Software Engineering. My work spans front-end development, cloud infrastructure, and user-centered design.`,
    aboutBioSecondary:
        "From wireframes and prototypes to production front-ends and AWS-managed systems, I enjoy owning a product's journey from idea to interface — staying sincere about deadlines and open to new ideas along the way.",

    yearsOfExperience: '2+',
    completedProjects: '4+',
    hoursWorked: '2K+',
    availableForWork: true,

    location: 'Kathmandu, Nepal',
    phone: '+977 9810958014',

    email: 'shushantgiri98@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Sushant, I am reaching out to you because...',

    resumeUrl: '', // 👋 add a link to your CV/resume (PDF) here, shown on the hero button
    calendlyUrl: '', // e.g. https://cal.com/your-username/30min
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/shushantgiri' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/shushantgiri' },
    { name: 'twitter', url: 'https://twitter.com/shushantgiri' },
    { name: 'instagram', url: 'https://instagram.com/shushant.giri' },
    { name: 'website', url: 'https://girisushant.com.np' },
];

const ICON_CDN =
    'https://raw.githubusercontent.com/devicons/devicon/master/icons';

export const MY_STACK = {
    'front-end development': [
        {
            name: 'HTML',
            icon: `${ICON_CDN}/html5/html5-original.svg`,
        },
        {
            name: 'CSS',
            icon: `${ICON_CDN}/css3/css3-original.svg`,
        },
        {
            name: 'JavaScript',
            icon: `${ICON_CDN}/javascript/javascript-original.svg`,
        },
        {
            name: 'React',
            icon: `${ICON_CDN}/react/react-original.svg`,
        },
        {
            name: 'Next.js',
            icon: `${ICON_CDN}/nextjs/nextjs-original.svg`,
        },
        {
            name: 'TypeScript',
            icon: `${ICON_CDN}/typescript/typescript-original.svg`,
        },
        {
            name: 'Tailwind CSS',
            icon: `${ICON_CDN}/tailwindcss/tailwindcss-original.svg`,
        },
        {
            name: 'Bootstrap',
            icon: `${ICON_CDN}/bootstrap/bootstrap-original.svg`,
        },
    ],
    'ui/ux design': [
        {
            name: 'Figma',
            icon: `${ICON_CDN}/figma/figma-original.svg`,
        },
        {
            name: 'Prototyping & Wireframing',
            icon: `${ICON_CDN}/figma/figma-original.svg`,
        },
        {
            name: 'Photoshop',
            icon: `${ICON_CDN}/photoshop/photoshop-plain.svg`,
        },
        {
            name: 'Canva',
            icon: `${ICON_CDN}/canva/canva-original.svg`,
        },
    ],
    'cloud & tools': [
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Git',
            icon: `${ICON_CDN}/git/git-original.svg`,
        },
        {
            name: 'GitHub',
            icon: `${ICON_CDN}/github/github-original.svg`,
        },
        {
            name: 'VS Code',
            icon: `${ICON_CDN}/vscode/vscode-original.svg`,
        },
    ],
};

/**
 * ================================================================
 *  📁 SAMPLE PROJECTS — replace with your own work.
 *  Keep the same shape (title, slug, techStack, images, etc.)
 *  Images live in /public/projects/{thumbnail,long,images}
 * ================================================================
 */
export const PROJECTS: IProject[] = [
    {
        title: 'Yarsa Rooms',
        slug: 'yarsa-rooms',
        liveUrl: '',
        year: 2025,
        description: `
      A hotel and travel booking platform for discovering stays, experiences, and packages across Nepal and beyond. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🏨 Stay Discovery: Browse rooms, lakefront stays, B&Bs, camping, and hotels by category</li>
        <li>🌍 Popular Locations: Curated destination cards for quick browsing</li>
        <li>🪂 Experiences: Bookable activities like paragliding and trekking packages</li>
        <li>📱 Fully Responsive: Dedicated light-mode desktop experience and a dark-mode mobile app view</li>
      </ul>
      `,
        role: `
      Front-End Developer <br/>
      <ul>
        <li>🎨 Built the responsive desktop layout, including search, categories, and recommendation grids</li>
        <li>🌗 Designed a dedicated dark-mode mobile experience</li>
        <li>📦 Structured reusable card components for stays, experiences, and destinations</li>
      </ul>
      `,
        techStack: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'Figma',
            'Responsive Design',
        ],
        thumbnail: '/yarsa-rooms.png',
longThumbnail: '/yarsa-rooms.png',
images: [
    '/yarsa-rooms.png',
    '/yarsa-rooms-mobile.png',
],
    },
    {
        title: 'Electro EV',
        slug: 'electro-ev',
        liveUrl: 'https://electroev.co.uk/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for Electro EV to showcase their services, blog content, and product offerings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'System Administrator & Project Management',
        company: 'Thinko Learning Pvt. Ltd.',
        duration: 'Feb 2026 - Present',
    },
    {
        title: 'UI/UX Designer (On-site)',
        company: 'Evidhya Pvt. Ltd.',
        duration: 'Feb 2025 - Oct 2025',
    },
    {
        title: 'UI/UX Designer (Internship)',
        company: 'Jyrasoft Technology',
        duration: 'Sept 2024 - Dec 2024',
    },
    {
        title: 'Photography (Internship)',
        company: 'Nepal Photography Institute',
        duration: 'Jun 2022 - Jul 2022',
    },
];