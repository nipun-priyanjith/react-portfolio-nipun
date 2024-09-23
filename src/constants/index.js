import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import s1 from "../assets/projects/s1.png";
import s2 from "../assets/projects/s2.png";
import s3 from "../assets/projects/s3.png";
import s4 from "../assets/projects/s4.png";
import a from "../assets/projects/a.jpg";
import b from "../assets/projects/b.jpg";
import c from "../assets/projects/c.jpg";
import c1 from "../assets/projects/c1.jpg";
import c2 from "../assets/projects/c2.jpg";
import c3 from "../assets/projects/c3.png";
import f1 from "../assets/projects/f1.png";
import f2 from "../assets/projects/f2.png";
import f3 from "../assets/projects/f3.png";
import f4 from "../assets/projects/f4.png";
import cr1 from "../assets/projects/cr1.png";

export const HERO_CONTENT = `Dynamic and skilled Software Engineering student in the 2nd year of BSc (Hons) Computing at NIBM, seeking a software engineering internship to gain real-world experience. With foundational knowledge in cloud technologies such as AWS and Firebase, I am eager to contribute to innovative projects and gain hands-on experience in a collaborative team. `;

export const ABOUT_TEXT = `I'm an undergraduate software engineering student who enjoys breaking down complex problems into smaller parts and solving them effectively. I aim to leverage robust programming skills and continuous learning to contribute to software development, collaborate effectively with experienced engineers, and ensure team success in meeting project deadlines.`;

export const EXPERIENCES = [
  {
    
    role: "Git Version Control",
    company: "@ErrorFix404",
    description: `In this video, I cover the essentials of Git version control, including setting up a repository, creating branches, merging, and pushing changes to a remote repository. My clear explanations make the tutorial easy to follow for both beginners and experienced developers.`,
    
    link:"https://www.youtube.com/embed/oC_UZJhI160?si=4xVgyGc4zGthxVeV",
  },
  {
    
    role: "Malware Detection ",
    company: "@ErrorFix404",
    description: `In this video, I walk through how to clone and run a Python Malware Detection project. I guide viewers on detecting malware step by step, ensuring clarity at every stage. The tutorial includes source code for hands-on practice and modification.`,
    
    link:"https://www.youtube.com/embed/puKJBaBZd_4?si=aLXEK47qceJfIwp5",
  },
  // {
    
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    
  //   link:"https://www.youtube.com/embed/tgbNymZ7vqY",
  // },
  // {
    
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    
  //   link:"https://youtu.be/INQv1tinRP0?si=lpzU3UVOtvQutkWI",
  // },
];

export const PROJECTS = [
  {
    title: "Spring Boot eCommerce Application",
    image: [s1,s2,s3,s4],
    description:
      "This project is a web-based CRUD application built using Java Spring Boot and the MVC architecture. It consists of two main modules: e-admin for administrative functionalities and e-commerce for the main e-commerce functionalities.",
    technologies: ["Java_Spring_Boot", "Maven", "MVC", "XAMPP", "CSS"],
    link:["https://github.com/nipun-priyanjith/ecommerce_website_with_admin_panel/"]
  },
  {
    title: "malware detection",
    image: [c,b,a],
    description:
      "The objectives were to develop a robust malware detection system leveraging trie data structure, implementing both backend and frontend components, ensuring integration and scalability, and conducting thorough testing and evaluation.",
    technologies: ["Python", "Tkinter", " Trie_data_structure", "PyMuPDF","python-pptx"],
    link:["https://github.com/nipun-priyanjith/malware-detection/"]
  },
  {
    title: "Chandra Texttiles",
    image: [c1,c2,c3],
    description:
      "Harnessing Rapid Learning Skills to Excel in React, Redux, Tailwind CSS, and E-commerce Integration for an Exceptional Project Outcome. Leveraging Proficiency in Cloud Database Management to Ensure Optimal Backend Performance and Scalability.",
    technologies: ["React", "Redux", "Firebase", "tailwind_css","React-Toastify","Firebase_Auth_Service"],
    link:["https://github.com/nipun-priyanjith/chandra-texttiles/"]
  },  {
    title: "Tech Expo Robot",
    image: [f1,f2,f3,f4],
    description:
      "Developed an interactive robot interface using Tkinter and Python, featuring text-to-speech with pyttsx3. The robot presents exhibit information with animated eye and mouth expressions, responding to user clicks and delivering engaging messages. This project highlights my skills in GUI development and multimedia integration.",
    technologies: ["Python", "Tkinter", "pyttsx3", "PIL", "Threading"],
    link:["https://github.com/nipun-priyanjith/Tech_Expo_Robot_2024/"]
  },
  {
    title: "Casper - Smart Home Control System",
    image: [cr1],
    description:
      "Currently developing a smart home control system using Flutter for mobile-to-ESP32 communication. The system integrates voice commands for controlling devices, receives photos from an ESP32 camera, and monitors motion sensors for home security. The app also utilizes Firebase Authentication for user management.",
    technologies: ["Flutter", "Dart", "ESP32",   "Firebase", "ESP32-CAM"],
    link:["https://github.com/nipun-priyanjith/Casper/"]
  },
  // {
  //   title: "Caspar",
  //   image: [project1,project2,project3,project4],
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  //   link:["https://github.com/nipun-priyanjith/ecommerce_website_with_admin_panel/"]
  // },
];

export const CONTACT = {
  address: "Kegalle, Srilanka ",
  phoneNo: "0000",
  email: "nipunpriyanjith185@gmail.com",
  github:"https://github.com/nipun-priyanjith",
  youtube:"https://www.youtube.com/@ErrorFix404",
  reddit:"https://www.reddit.com/user/Nipun-Priyanjith/",
  linkedin:"https://www.linkedin.com/in/nipun-priyanjith-06a84a28a/",
};
