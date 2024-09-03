function Resume() {
  const skills = [
    'JavaScript',
    'React',
    'HTML/CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'Responsive Design',
  ];

  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my <a href="/path-to-your-resume.pdf" download>resume</a>.
      </p>
      <h2>Proficiencies</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
