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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dashboard,
  social,
} from "../assets";

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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "APUS TECH & ART",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies like MERN Stacks.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in making Online Learning Platform, code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Assistant Programmer Intern",
    company_name: "NHN Management BD LTD",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Developing and maintaining Dynamic  applications using React native and other related technologies Like Sanity CMS.",
      "Collaborating with cross-functional teams including Mobile App designers and other developers to create high-quality products.",
      "Implementing Mobile app as well as desktop version responsive design and ensuring cross-browser compatibility.",
      "Participating in different project team work,code reviews and providing constructive feedback to my teammates.",
    ],
  },
  {
    title: "React development intern",
    company_name: "Cehpoint",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in Api Documenting, code reviews with bug fixing and providing constructive feedback to other running project.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I was mistaken about my assumption that it was impossible to create a website that is as stunning as our goods, thanks to Ashraful Islam.",
    name: "Mr. Jit",
    designation: "CEO",
    company: "CehPoint",
    image:
      "https://media.istockphoto.com/id/936278022/photo/executive-senior-businessman-portrait.jpg?s=612x612&w=0&k=20&c=LIfPCNAtOrdL3PnDZRSzNU3myXVtt9shfJerzh4Wwdg=",
  },
  {
    testimonial:
      "The genuine concern Ashraful Islam has for his clients' success is something I've never encountered in a web developer.",
    name: "Mr. Pravesh",
    designation: "CTO",
    company: "Apptechvisa",
    image:
      "https://st.depositphotos.com/47153598/58762/i/450/depositphotos_587625506-stock-photo-mature-bearded-ceo-man-businesslike.jpg",
  },
  {
    testimonial:
      "Ashraful Islam Khan is the most talented and hardworking person I had ever met.I wish him sucess in future and recommend him for any potential job scope!",
    name: "Jubaer Ibn Zahir",
    designation: "𝗝𝗼𝗯 𝗣𝗹𝗮𝗰𝗲𝗺𝗲𝗻𝘁 𝗘𝘅𝗲𝗰𝘂𝘁𝗶𝘃𝗲 ",
    company: "𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗛𝗲𝗿𝗼",
    image:
      "https://media.licdn.com/dms/image/C5603AQFzsjAF1WKuqA/profile-displayphoto-shrink_400_400/0/1615558876946?e=1703116800&v=beta&t=bEy538YJ6F_qkpQ4zOHciDHNeo6m-dAFE0FbFU-yfpM",
  },
];

const projects = [
  {
    name: "Ai-QuizzBot",
    description:
      "Web-based platform that allows users to make quiz, save quiz, and create quiz from various section like MCQ,Fill in the Blanks, providing a convenient and efficient paltform for making quiz as per user  needs.",
    tags: [
      {
        name: "openAI",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "NextJs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ASHRAFULEJAB/aiquizbot-frontend",
    live_link: "https://ai-quizbot.netlify.app/",
  },
  {
    name: "Resaling Laptop",
    description:
      "Web application that enables users to search second hand laptop, view their products on dashboard based on role like admin will see different product,seller and buyer will same, and pay the products , advertise them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "expressJS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/ASHRAFULEJAB/Mall-of-Recondiotion-Laptop-Resale-Website-",
    live_link: "https://recondition-laptops.web.app/",
  },
  {
    name: "Doctors Service",
    description:
      "A comprehensive service providing platform that allows users to provide reviews about doctors service , service, and reviews will be visible based on person, and give recommendations for  popular doctors.",
    tags: [
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "React Js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/ASHRAFULEJAB/Cardiologists-Master-Docter-s-Service-Review-",
    live_link: "https://cardiologist-master.web.app/",
  },
  {
    name: "M-Soko Admin Panel",
    description:
      "An enterprize level admin dashboard  that allows admin/users to controll all things like product ,service, and property.By using this site admin ,seller,buyer can manage their sales report,all business info etc.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link:
      "https://github.com/cehpoint-official/m-sokon-admin-panel",
    live_link: "https://sokoniiadmin.netlify.app/dashboard",
  },
  {
    name: "AshBook",
    description:
      "A social media platform that allows users to post anything,give like to the post,and delete the post. People also do comment  on persons post, and do search for  popular posts.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "sanityCMS",
        color: "green-text-gradient",
      },
      {
        name: "next Js",
        color: "pink-text-gradient",
      },
    ],
    image: social,
    source_code_link: "https://github.com/ASHRAFULEJAB/AshBook_Typescript",
    live_link: "https://ash-book-typescript-1mk79.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
