import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project One',
      image: '/path-to-image/project1.png',
      deployedLink: 'https://your-deployed-project1.com',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project Two',
      image: '/path-to-image/project2.png',
      deployedLink: 'https://your-deployed-project2.com',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
