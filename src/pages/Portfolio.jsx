import '@fortawesome/fontawesome-free/css/all.min.css';
import Project from '../components/Project';
import portfolioImage from '../assets/portfolio-1.png'; 
import datingImage from '../assets/dating.png'; 


function Portfolio() {
  const projects = [
    {
      title: "React Portfolio",
      imageUrl: portfolioImage,
      description: "My portfolio using React and custom css styling",
      githubLink: "https://github.com/thegreatwall88/React-Portfolio",
      websiteLink: "https://stately-sunshine-3a7fc2.netlify.app/"
    },
    {
      title: "Dating Site",
      imageUrl: datingImage,
      description: "Postgres Database",
      githubLink: "https://github.com/olivercappis/project-2"
    },
    {
      title: "Run Buddy",
      imageUrl: "url_to_your_runbuddy_image",
      description: "Start Building Habits",
      githubLink: "https://github.com/user/runbuddy"
    },
    {
      title: "Abstract Red Lights",
      imageUrl: "url_to_your_abstract_red_image",
      description: "Futuristic Design",
      githubLink: "https://github.com/user/abstract-red"
    },
  ];

  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;