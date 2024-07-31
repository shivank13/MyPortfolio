import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2.5 years of hands-on experience, I have honed my skills in front-end technologies like React and JavaScript, as well as back-end technologies like Python, Django and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `A dedicated and versatile software engineer with a strong focus on full stack development. Over the past few years, I have cultivated extensive experience in creating efficient,
 scalable, and user-friendly web applications. I hold a Bachelor in Technology (Computer Science) degree, graduating with a CGPA of 8.4. I am a proactive problem-solver who is always looking for ways to improve the efficiency and effectiveness of the software I develop. I am a strong believer in agile development methodologies and am skilled at working in fast-paced, collaborative team environments. Beyond professional engagements, I am a continuous learner with a penchant for exploring new tools and technologies. `;

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
