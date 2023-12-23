import React, { useState } from "react";
import NextLink from "next/link";
import { Profile } from "../components/Profile";

type Props = {
  text: string;
  url: string;
};

type LinkItem = {
  title: string;
  url: string;
};

interface LinkTreeProps {
  links: LinkItem[];
}

const Button = ({ text, url }: Props) => {
  const link = url.includes("http") ? url : `https://${url}`;
  return (
    <NextLink href={link} passHref>
      <button
        style={{ width: "700px" }}
        className="bg-green-300 text-white border-green-300 border-2 py-4 px-14 hover:bg-white hover:text-green-300 transition-all duration-100 relative rounded-lg"
      >
        {text}
      </button>
    </NextLink>
  );
};

const LinkTree: React.FC<LinkTreeProps> = ({ links: initialLinks = [] }) => {
  const [links, setLinks] = useState<LinkItem[]>(initialLinks);

  const addLink = () => {
    const title = window.prompt("Enter link title");
    const url = window.prompt("Enter link URL");
    if (title && url) {
      setLinks([...links, { title, url }]);
    }
  };

  const deleteLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-8 w-full h-screen">
      <Profile
        name="User Name"
      />
      {links.map((link, index) => (
        <div key={index} className="relative">
          <Button text={link.title} url={link.url} />
          <button 
            onClick={() => deleteLink(index)} 
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-500 text-white w-6 h-6 rounded-full"
            >
            -
          </button>
        </div>
      ))}
      <button
        onClick={addLink}
        className="bg-blue-500 text-white border-blue-300 border-2 py-4 px-4 w-14 h-14 rounded-full hover:bg-white hover:text-blue-300 transition-all duration-100 flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export { LinkTree };

