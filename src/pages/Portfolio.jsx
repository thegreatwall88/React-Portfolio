import '@fortawesome/fontawesome-free/css/all.min.css';
import Project from '../components/Project';
import portfolioImage from '../assets/portfolio-1.png'; 
import datingImage from '../assets/dating.png'; 
import pwaImage from '../assets/pwa.png'; 
import blogImage from '../assets/techblog.jpeg'; 


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
      githubLink: "https://github.com/olivercappis/project-2",
      websiteLink: "https://loveconnect.onrender.com/"
    },
    {
      title: "PWA Text Editor",
      imageUrl: pwaImage,
      description: "Online/Offline Text Editor",
      githubLink: "https://github.com/thegreatwall88/PWA-Text-Editor",
      websiteLink: "https://pwa-text-editor-dkzn.onrender.com/"
    },
    {
      title: "Tech Blog",
      imageUrl: blogImage,
      description: "Handlebar",
      githubLink: "https://github.com/thegreatwall88/Blog-2.0",
      websiteLink: "https://blog-2-0-bbec.onrender.com/"
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