import NextLink from "next/link";

type Props = {
  text: string;
  url: string;
};

const Button = ({ text, url }: Props) => {
  const link = url.includes("http") ? url : `https://${url}`;
  return (
    <NextLink href={link} passHref>
      <button style={{ width: '700px' }} className="bg-blue-500 text-white border-blue-300 border-2 py-4 px-14 hover:bg-white hover:text-blue-300 transition-all duration-100">
        {text}
      </button>
    </NextLink>
  );
};

export default Button;