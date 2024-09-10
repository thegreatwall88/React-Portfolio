import myPhoto from '../assets/avatar.jpg';

function About() {
  return (
    <div className="about-container">
      <img src={myPhoto} alt="Khoi Mai" className="about-photo" />
      <div className="about-content">
        <h1>About Me</h1>
        <p>This is the About Me page. Here's a bit about myself.</p>
      </div>
    </div>
  );
}

export default About;