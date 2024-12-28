import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-secondary-color max-w-screen-xl rounded-xl m-auto mt-10 mb-40 p-5 uppercase font-bold flex justify-around">
      <p className="text-start">This is a test project for now.</p>
      <div className="flex items-center gap-2">
        <span className="block text-textcolor">Github: </span>
        <a
          className="hover:text-accent-color"
          target="_blank"
          href="https://github.com/moki-moki/ui-vis"
          rel="noreferrer"
        >
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Footer;
