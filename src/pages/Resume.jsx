import resumeFile from '../assets/Resume.pdf'; 
function Resume() {

  return (
    <div className="resume-container">
      <h1>Resume</h1>
     
      <iframe 
        src={resumeFile} 
        style={{ width: '100%', height: '600px', border: 'none' }} 
        title="Resume"
      ></iframe>

      
    </div>
  );
}

export default Resume;
