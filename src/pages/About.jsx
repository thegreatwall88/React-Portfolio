import myPhoto from '../assets/avatar.jpg';

function About() {
  return (
    <div className="about-container">
      <img src={myPhoto} alt="Khoi Mai" className="about-photo" />
      <div className="about-content">
        <h1>About Me</h1>
        <p>I graduated from the University of Texas with a degree in Mathematics and Computer Science. After completing my studies, I spent a year teaching math at Austin Community College, where I discovered a passion for problem-solving and helping others learn. Following that, I joined Apple, where I worked on the Apple Maps project for a year, gaining valuable experience in the tech industry.

          Seeking a new challenge, I decided to take a leap and pursue my entrepreneurial dreams. I opened a bubble tea shop and later expanded into the restaurant business with a Pho Vietnamese restaurant. Running these businesses taught me resilience, leadership, and how to adapt to ever-changing situations.

          Now, I'm excited to return to the tech industry, having recently become a full stack developer. I'm eager to apply my diverse background and experiences to solving new challenges in software development.</p>
      </div>
    </div>
  );
}

export default About;