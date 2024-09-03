import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <p>
        <a href="https://github.com/thegreatwall88" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a> 
        &nbsp;|&nbsp;
        <a href="https://linkedin.com/in/thegreatwall88" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a> 
        &nbsp;|&nbsp;
        <a href="https://stackoverflow.com/users/thegreatwall88" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow size={24} />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
