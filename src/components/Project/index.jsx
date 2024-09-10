import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Project({ title, imageUrl, description, githubLink, websiteLink }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <div className="overlay">
        <h2>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> {/* GitHub icon */}
        </a>
      </div>
    </div>
  );
}

export default Project;