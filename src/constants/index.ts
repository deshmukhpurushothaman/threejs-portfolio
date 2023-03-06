import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../../public/assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: '/assets/tech/html.png',
    },
    {
        name: "CSS 3",
        icon: '/assets/tech/css.png',
    },
    {
        name: "JavaScript",
        icon: '/assets/tech/javascript.png',
    },
    {
        name: "TypeScript",
        icon: '/assets/tech/typescript.png',
    },
    {
        name: "React JS",
        icon: '/assets/tech/reactjs.png',
    },
    {
        name: "Redux Toolkit",
        icon: '/assets/tech/redux.png',
    },
    {
        name: "Tailwind CSS",
        icon: '/assets/tech/tailwind.png',
    },
    {
        name: "Node JS",
        icon: '/assets/tech/nodejs.png',
    },
    {
        name: "MongoDB",
        icon: '/assets/tech/mongodb.png',
    },
    {
        name: "Three JS",
        icon: '/assets/tech/threejs.svg',
    },
    {
        name: "git",
        icon: '/assets/tech/git.png',
    },
    {
        name: "figma",
        icon: '/assets/tech/figma.png',
    },
    {
        name: "docker",
        icon: '/assets/tech/docker.png',
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Nonceblox",
        icon: '/assets/company/nonceblox.jpg',
        iconBg: "#383E56",
        date: "Feb 2022 - Present",
        points: [
            "Develop NFT Marketplace using MERN Stack and web3.0 technologies",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Develop crypto exchange marketplace",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Lead a small team and manage timelines"
        ],
    },
    {
        title: "Full Stack Developer (Intern)",
        company_name: "Klenty",
        icon: '/assets/company/klenty.jpg',
        iconBg: "#E6DEDD",
        date: "Aug 2021 - Dec 2021",
        points: [
            "Integrate payment gateway for users/customers to subscribe to the product.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Allocate features according to the user subscription.",
            "Develop product by following industry best practices.",
        ],
    },
    {
        title: "Full Stack Developer (Intern)",
        company_name: "Appglide",
        icon: '/assets/company/appglide.jpg',
        iconBg: "#383E56",
        date: "Jun 2021 - Aug 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer (Intern)",
        company_name: "Best Enlist",
        icon: '/assets/company/best_enlist.jpg',
        iconBg: "#E6DEDD",
        date: "Nov 2020 - May 2021",
        points: [
            "Developing and maintaining web applications using MERN Stack, Flutter and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Deploy and maintain the product.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Develop product according to customer feedback",
        ],
    },
    {
        title: "Full Stack Developer (Intern)",
        company_name: "Excelcult",
        icon: '/assets/company/excelcult.png',
        iconBg: "#383E56",
        date: "Sept 2020 - April 2021",
        points: [
            "Developing web application using MERN Stack and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };