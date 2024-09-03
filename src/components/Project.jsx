function Project({ title, imageUrl, deployedUrl, repoUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
        <a href={repoUrl} target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>
    </div>
  );
}

export default Project;
