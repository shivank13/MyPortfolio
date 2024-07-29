import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2.5 years of hands-on experience, I have honed my skills in front-end technologies like React and JavaScript, as well as back-end technologies like Python, Django and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Aug 2022 - Present",
    role: "Software Engineer - I",
    company: "Hashedin By Deloitte",
    description: `Developed innovative software solutions using React and Django, focusing on real-time data communication and enhancing workflow efficiency. Led development of user-centric interfaces with React, optimizing performance and satisfaction. Created and integrated RESTful APIs with Django,
     improving data management and team collaboration. Implemented key functionalities and ensured high-quality, reliable applications through rigorous testing. Collaborated with stakeholders for Project timelines and Sprint planning.`,
    technologies: ["Javascript", "React", "Python", "Django", "mongoDB"],
  },
  {
    year: "Jan 2022 - Aug 2022",
    role: "Software Engineer Intern",
    company: "Hashedin By Deloitte",
    description: `During my 7 months internship, I was exposed to several tools and
    technologies like HTML, CSS, Typescript, React, Java, springboot,
    Python, Django and Angular and Worked as a Full stack dev(React and Django) on a product.`,
    technologies: ["HTML", "CSS", "React", "Python", "Django"],
  },
];

export const PROJECTS = [
  {
    title: "NETFLIX-GPT",
    image: project1,
    description:
      "A netflix clone website having GPT search feature and user authentication.",
    technologies: ["React","Redux","TailwindCSS","Firebase"],
    githublink:"https://github.com/shivank13/netflix-gpt"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing experience, projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS"],
    githublink:"https://github.com/shivank13/ShivankPortfolio",
  },
  {
    title: "Food Ordering Website",
    image: project2,
    description:
      "A food ordering website having features like Search, filter, Accordian and Add to cart.",
    technologies: ["React","Redux","TailwindCSS"],
    githublink:"https://github.com/shivank13/ReactProject",
  },
];

export const CONTACT = {
  phoneNo: "+91-8265820722",
  email: "shivanksharma013@gmail.com",
};
