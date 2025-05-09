import { Section } from "../components/Section";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export const Footer = () => {
  return (
    <Section id="footer" className="!px-0 !py-10 border-t border-stroke-1">
      <footer
        className="container flex sm:justify-between justify-center items-center gap-10
          max-sm:flex-col"
      >
        <p className="caption text-n-4 lg:block">Made with ❤️ in Brazil</p>
        <div className="flex gap-2 items-center">
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://www.linkedin.com/in/gumarqs/"
          >
            <img src={linkedin} width={24} height={24} alt="Linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://github.com/GuMarques"
          >
            <img src={github} width={24} height={24} alt="Github" />
          </a>
        </div>
      </footer>
    </Section>
  );
};
