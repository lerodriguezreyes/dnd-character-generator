function Footer() {
  return (
    <div id="footer">
      <p>
        Made with{" "}
        {
          <img
            width="20"
            height="20"
            src="https://github.com/lerodriguezreyes/react-kanban/blob/main/images/love.png?raw=true"
            alt="filled-like"
          />
        }
        by Luis Emmanuel
      </p>
      <p>
        <a href="https://github.com/lerodriguezreyes/dnd-character-generator">
          {" "}
          SPA Repository{" "}
        </a>
        <a href="https://github.com/lerodriguezreyes/mock-server-dnd-character-generator">
          {" "}
          Mock server repository{" "}
        </a>
        <a href="mailto:lerodriguezreyes@outlook.com?subject=About%20Your%20DND%20Generator%20">
          {" "}
          Reach Out!{" "}
        </a>
      </p>
    </div>
  );
}

export default Footer;
