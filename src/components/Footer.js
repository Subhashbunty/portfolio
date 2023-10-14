import React from 'react';

const Footer = () => {
  const styles = `
    .footer {
      background-color: black;
      color: #fff;
      padding: 10px 0;
      text-align: center;
    }

    .footer-nav ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
    }

    .footer-nav li {
      margin: 0 20px;
    }

    .footer-nav a {
      text-decoration: none;
      color: #fff;
    }

    .footer-nav a:hover {
      text-decoration: underline;
    }
  `;

  return (
    <footer className="footer">
      <style>{styles}</style>
      <nav className="footer-nav">
        <ul>
          <li><a href="https://github.com/Subhashbunty">GITHUB</a></li>
          <li><a href="#">INSTAGRAM</a></li>
          <li><a href="#">LINKED IN</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
