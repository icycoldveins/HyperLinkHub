import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";
import { LinkTree } from "./LinkTree";
const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  // add more links as needed
];
const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <LinkTree links={links} />
    <Footer />
  </div>
);

export { Base };
