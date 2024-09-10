function Resume() {
  const frontendSkills = [
    'HTML/CSS', 
    'JavaScript', 
    'Bootstrap', 
    'The DOM', 
    'APIs', 
    'jQuery', 
    'JSON', 
    'AJAX', 
    'Progressive Web Apps (PWAs)', 
    'React', 
    'Responsive Design'
  ];
  
  const backendSkills = [
    'Node.js', 
    'Express', 
    'SQL', 
    'MVC Paradigm', 
    'Sequelize', 
    'NoSQL', 
    'MERN Stack', 
    'Git'
  ];

  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <p>
        Download my <a href="/resume.doc" download>resume</a>.
      </p>

      <div className="proficiencies-container">
        <div className="frontend">
          <h2>Frontend Proficiencies</h2>
          <ul>
            {frontendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="backend">
          <h2>Backend Proficiencies</h2>
          <ul>
            {backendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
